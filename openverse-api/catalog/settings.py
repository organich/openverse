"""
Django settings for catalog project.

Generated by 'django-admin startproject' using Django 2.0.5.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""
import os
from pathlib import Path
from socket import gethostbyname, gethostname


TRUE_STRINGS = ["true", "t", "yes", "y", "1"]

# Build paths inside the project like this: BASE_DIR.join('dir', 'subdir'...)
BASE_DIR = Path(__file__).resolve().parent.parent

# Where to collect static files in production/development deployments
STATIC_ROOT = "/var/api_static_content/static"

# Logo uploads
MEDIA_ROOT = "/var/api_media/"
MEDIA_URL = "/media/"

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]  # required

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv("DJANGO_DEBUG_ENABLED", "True").lower() in TRUE_STRINGS

ALLOWED_HOSTS = [
    "api-dev.openverse.engineering",
    "api.openverse.engineering",
    gethostname(),
    gethostbyname(gethostname()),
]

if lb_url := os.getenv("LOAD_BALANCER_URL"):
    ALLOWED_HOSTS.append(lb_url)

if DEBUG:
    ALLOWED_HOSTS += [
        "localhost",
        "127.0.0.1",
        "0.0.0.0",
    ]

# Domains that shortened links may point to
SHORT_URL_WHITELIST = {
    "api-dev.openverse.engineering",
    "api.openverse.engineering",
    "localhost:8000",
}
SHORT_URL_PATH_WHITELIST = ["/v1/list", "/v1/images/"]

USE_S3 = os.getenv("USE_S3", "False") in TRUE_STRINGS

# Application definition

INSTALLED_APPS = [
    "catalog",
    "catalog.api",
    "drf_yasg",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "oauth2_provider",
    "rest_framework",
    "corsheaders",
    "sslserver",
]

if USE_S3:
    DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
    AWS_STORAGE_BUCKET_NAME = os.getenv("LOGOS_BUCKET", "openverse-api-logos-prod")
    AWS_S3_SIGNATURE_VERSION = "s3v4"
    INSTALLED_APPS.append("storages")

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "oauth2_provider.middleware.OAuth2TokenMiddleware",
]

SWAGGER_SETTINGS = {"SECURITY_DEFINITIONS": {}}

OAUTH2_PROVIDER = {
    "SCOPES": {
        "read": "Read scope",
        "write": "Write scope",
    }
}

OAUTH2_PROVIDER_APPLICATION_MODEL = "api.ThrottledApplication"

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "oauth2_provider.contrib.rest_framework.OAuth2Authentication",
    ),
    "DEFAULT_VERSIONING_CLASS": "rest_framework.versioning.URLPathVersioning",
    "DEFAULT_RENDERER_CLASSES": (
        "rest_framework.renderers.JSONRenderer",
        "rest_framework.renderers.BrowsableAPIRenderer",
        "rest_framework_xml.renderers.XMLRenderer",
    ),
    "DEFAULT_THROTTLE_CLASSES": (
        "catalog.api.utils.throttle.BurstRateThrottle",
        "catalog.api.utils.throttle.SustainedRateThrottle",
        "catalog.api.utils.throttle.OAuth2IdThrottleSustainedRate",
        "catalog.api.utils.throttle.OAuth2IdThrottleBurstRate",
        "catalog.api.utils.throttle.EnhancedOAuth2IdThrottleSustainedRate",
        "catalog.api.utils.throttle.EnhancedOAuth2IdThrottleBurstRate",
    ),
    "DEFAULT_THROTTLE_RATES": {
        "anon_burst": "60/min",
        "anon_sustained": "5000/day",
        "oauth2_client_credentials_sustained": "10000/day",
        "oauth2_client_credentials_burst": "100/min",
        "enhanced_oauth2_client_credentials_sustained": "20000/day",
        "enhanced_oauth2_client_credentials_burst": "200/min",
    },
    "EXCEPTION_HANDLER": "catalog.api.utils.exceptions.exception_handler",
}

if os.getenv("DISABLE_GLOBAL_THROTTLING", "True").lower() in TRUE_STRINGS:
    del REST_FRAMEWORK["DEFAULT_THROTTLE_RATES"]
    del REST_FRAMEWORK["DEFAULT_THROTTLE_CLASSES"]

REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
REDIS_PORT = os.getenv("REDIS_PORT", "6379")
REDIS_PASSWORD = os.getenv("REDIS_PASSWORD", "")
CACHES = {
    # Site cache writes to 'default'
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/0",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    },
    # For rapidly changing stats that we don't want to hammer the database with
    "traffic_stats": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/1",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    },
    # For ensuring consistency among multiple Django workers and servers.
    # Used by Redlock.
    "locks": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": f"redis://{REDIS_HOST}:{REDIS_PORT}/2",
        "OPTIONS": {
            "CLIENT_CLASS": "django_redis.client.DefaultClient",
        },
    },
}

# Produce CC-hosted thumbnails dynamically through a proxy.
THUMBNAIL_PROXY_URL = os.getenv("THUMBNAIL_PROXY_URL", "http://localhost:8222")

THUMBNAIL_WIDTH_PX = 600

AUTHENTICATION_BACKENDS = (
    "oauth2_provider.backends.OAuth2Backend",
    "django.contrib.auth.backends.ModelBackend",
)

ROOT_URLCONF = "catalog.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR.joinpath("catalog", "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "catalog.wsgi.application"

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "HOST": os.getenv("DJANGO_DATABASE_HOST", "localhost"),
        "PORT": int(os.getenv("DJANGO_DATABASE_PORT", "5432")),
        "USER": os.getenv("DJANGO_DATABASE_USER", "deploy"),
        "PASSWORD": os.getenv("DJANGO_DATABASE_PASSWORD", "deploy"),
        "NAME": os.getenv("DJANGO_DATABASE_NAME", "openledger"),
    },
    "upstream": {
        "ENGINE": "django.db.backends.postgresql",
        "HOST": os.getenv("UPSTREAM_DATABASE_HOST", "localhost"),
        "PORT": int(os.getenv("UPSTREAM_DATABASE_PORT", "5433")),
        "USER": os.getenv("UPSTREAM_DATABASE_USER", "deploy"),
        "PASSWORD": os.getenv("UPSTREAM_DATABASE_PASSWORD", "deploy"),
        "NAME": os.getenv("UPSTREAM_DATABASE_NAME", "upstream_db"),
    },
}

# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation"
        ".UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation" ".MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation" ".CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation" ".NumericPasswordValidator",
    },
]

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "console": {
            "level": "INFO",
            "class": "logging.StreamHandler",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["console"],
            "level": "INFO",
            "propagate": True,
        },
        # root logger
        "": {
            "level": "INFO",
            "handlers": ["console"],
        },
    },
}

# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

STATIC_URL = "/static/"

# Allow anybody to access the API from any domain
CORS_ORIGIN_ALLOW_ALL = True

# The version of the API. We follow the semantic version specification.
API_VERSION = os.getenv("SEMANTIC_VERSION", "Version not specified")

WATERMARK_ENABLED = os.getenv("WATERMARK_ENABLED", "False").lower() in TRUE_STRINGS

ELASTICSEARCH_URL = os.getenv("ELASTICSEARCH_URL", "localhost")
ELASTICSEARCH_PORT = int(os.getenv("ELASTICSEARCH_PORT", "9200"))
ELASTICSEARCH_AWS_REGION = os.getenv("ELASTICSEARCH_AWS_REGION", "us-east-1")

# Additional settings for dev/prod environments
AWS_ACCESS_KEY_ID = os.getenv("AWS_ACCESS_KEY_ID", "")
AWS_SECRET_ACCESS_KEY = os.getenv("AWS_SECRET_ACCESS_KEY", "")

EMAIL_HOST = os.getenv("EMAIL_HOST", "")
EMAIL_PORT = os.getenv("EMAIL_PORT", 25)
EMAIL_HOST_USER = os.getenv("EMAIL_HOST_USER", "")
EMAIL_HOST_PASSWORD = os.getenv("EMAIL_HOST_PASSWORD", "")
EMAIL_SUBJECT_PREFIX = "[noreply]"
EMAIL_USE_TLS = True

if EMAIL_HOST_USER or EMAIL_HOST_PASSWORD:
    EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
else:
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"

# Log full Elasticsearch response
VERBOSE_ES_RESPONSE = os.getenv("DEBUG_SCORES", "False").lower() in TRUE_STRINGS

# Whether to boost results by authority and popularity
USE_RANK_FEATURES = os.getenv("USE_RANK_FEATURES", "True").lower() in TRUE_STRINGS
