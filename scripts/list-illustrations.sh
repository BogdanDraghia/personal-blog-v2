#!/bin/bash

aws s3 ls s3://cdn.bogdandraghia.com/illustrations/ --recursive | grep -E '\.(png|jpg|jpeg|gif|webp)$'
