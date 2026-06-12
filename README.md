# @n8n-dev/n8n-nodes-kumpeapps

![kumpeapps Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-kumpeapps.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-kumpeapps)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing kumpeapps API integrations by hand.**

Every time you connect n8n to kumpeapps, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to kumpeapps took 5 minutes, not half a day?**

This node gives you **2+ resources** out of the box: **Authentication**, **K Kid**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-kumpeapps
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-kumpeapps`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **kumpeapps API** → paste your API key
3. Drag the **kumpeapps** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Authentication</b> (8 operations)</summary>

- Patch Compromise app key
- Post Request app key
- Put Deactivate app key
- Get Request auth key for user login user
- Patch Compromise auth key
- Post Request auth key for user login user
- Put Deactivate auth key logout
- Get Verifies YubiKey OTP for authenticated user

</details>

<details>
<summary><b>K Kid</b> (18 operations)</summary>

- Get returns allowance balance and allowance transactions
- Post adds new allowance transaction to kidUserID
- Post subscribes unsubscribes registers for apns push notifications
- Delete s chore for given chore ID
- Get returns list of chores for given user
- Post adds chore for given user
- Put updates chore for given chore ID
- Post adds new master user account
- Get Create Share Link
- Get s user info
- Delete s user
- Get returns list of users
- Post adds new child user
- Put updates user
- Delete item from wishlist
- Get list of wishlist items
- Post Add item to kid s wishlist
- Put Update item on kid s wishlist

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from kumpeapps docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official kumpeapps OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **kumpeapps** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the kumpeapps API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
