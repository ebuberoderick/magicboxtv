#!/usr/bin/env bash

# This script can be used to generate an ".env" for local development with
# docker compose.
#
# Example:
# ./scripts/secrets.sh [--silent | -s]

function check_openssl {
    which openssl > /dev/null
}

function gen_random_string {
    openssl rand -hex 16 | tr -d "\n"
}

function gen_env {
    cat << EOF
#
# USE THIS ONLY LOCALLY
#

# ==============================================================================
# Backend settings
# ==============================================================================


NEXT_PUBLIC_API_HOST_URL=http://localhost:3000


EOF
}


check_openssl
RET=$?
if [ $RET -eq 1 ]; then
    echo "Please install 'openssl' >  https://www.openssl.org/"
    exit 1
fi

set -Eeuo pipefail

silent="no"

while [[ $# -gt 0 ]]; do
    case "$1" in
        --silent | -s )
            silent="yes"
            shift
        ;;

        * )
            shift
        ;;
    esac
done





gen_env > .env