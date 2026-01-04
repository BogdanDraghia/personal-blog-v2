#!/bin/bash

S3_BUCKET="s3://cdn.bogdandraghia.com/illustrations"

for image in illustrations/*; do
  [ -f "$image" ] || continue
  
  filename=$(basename "$image")
  name="${filename%.*}"
  ext="${filename##*.}"
  s3_path="$S3_BUCKET/$name/${name}_large.$ext"
  echo $s3_path
  aws s3 cp "$image" "$s3_path"
done

echo "script done"
