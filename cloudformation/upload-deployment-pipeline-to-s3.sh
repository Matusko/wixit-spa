#!/bin/bash

aws s3 cp pipeline.yaml s3://webhooks-configs-and-templates/wixit-spa/
aws s3 cp pipeline-params-without-variables.json s3://webhooks-configs-and-templates/wixit-spa/
