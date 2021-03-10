#!/bin/bash

API="https://shielded-citadel-63256.herokuapp.com/"
URL_PATH="/posts"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \

echo
