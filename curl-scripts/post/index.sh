# sh curl-scripts/post/index.sh
curl 'http://localhost:4741/posts' \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \

 echo
