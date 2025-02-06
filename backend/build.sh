#!/bin/bash
# Exit on error
set -e

# Install dependencies using Pipenv
echo "Installing pipenv"
pip install pipenv

echo "Activating the environment"
pipenv install  # Automatically installs the dependencies in Pipfile

echo "Installing dependencies"
pipenv install --dev  # Install both default and dev dependencies (if applicable)

# Run migrations to set up the database
echo "Running database migrations..."
pipenv run python manage.py migrate

# Run the Django development server or Gunicorn for production
echo "Starting Django app..."

pipenv run python manage.py runserver 0.0.0.0:8000