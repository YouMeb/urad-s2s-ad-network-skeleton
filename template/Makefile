BIN := node_modules/.bin
MOCHA := $(BIN)/mocha --harmony

SRC := ./*.js
TEST_SRC := ./test/*.js

include dependencies.mk

test: eslint
	@$(MOCHA) $(TEST_SRC)

.PHONY: test
