#!/bin/bash

API="https://shielded-citadel-63256.herokuapp.com/"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
