# sh curl-scripts/posts/create.sh
curl 'http://localhost:4741/posts' \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "post": {
      "sport": "'"${SPORT}"'",
      "title": "'"${TITLE}"'",
      "body": "'"${BODY}"'"
    }
  }'
echo
