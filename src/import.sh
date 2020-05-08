#!bin/bash

yarn firebase auth:import \
	src/users.json \
	--hash-algo=SHA1 \
	--hash-input-order=SALT_FIRST \
	--rounds=1