#!/bin/sh

if [ "$1" = "mid" ]; then
    cd /var/www/lottonew/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/
    /var/www/lottonew/scripts/Python/env/lotto/bin/python3 /var/www/lottonew/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/__main__.py mid
else
    cd /var/www/lottonew/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/
    /var/www/lottonew/scripts/Python/env/lotto/bin/python3 /var/www/lottonew/scripts/Python/env/lotto/scripts/US/Florida/Fantasy5v2/__main__.py eve
fi