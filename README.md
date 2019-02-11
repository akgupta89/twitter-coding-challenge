# Twitter Coding Challenge

JavaScript implementation of the Twitter Coding Challenge done in Node.JS / JS / ES6. 

## Overview

Create a program that validates changes made to a file and has approval from owners from its own directory and any transitive dependent directories. A change is considered approved if the owners from the directory or any parent directories has approved it.

## Requirements
Requires Node.JS (tested on Node v10.15.0)

## Install
1. Clone the repo
2. Run `npm install`
3. Run `npm link`

## Testing
* For automated testing, run `npm test`
* For manual testing:
  * Run `validate_approvals --approvers alovelace,ghopper --changed-files src/com/twitter/follow/Follow.java,src/com/twitter/user/User.java` should return `Approved`
  * Run `validate_approvals --approvers alovelace --changed-files src/com/twitter/follow/Follow.java` should return `Insufficient approvals`
  * Run `validate_approvals --approvers eclarke --changed-files src/com/twitter/follow/Follow.java` should return `Insufficient approvals`
  * Run `validate_approvals --approvers alovelace,eclarke --changed-files src/com/twitter/follow/Follow.java` should return `Approved`
  * Run `validate_approvals --approvers mfox --changed-files src/com/twitter/tweet/Tweet.java` should return `Approved`

License
----
> MIT