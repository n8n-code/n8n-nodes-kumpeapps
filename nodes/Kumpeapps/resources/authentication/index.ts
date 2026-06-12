import type { INodeProperties } from 'n8n-workflow';

export const authenticationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					]
				}
			},
			"options": [
				{
					"name": "Auth Appkey Patch",
					"value": "Auth Appkey Patch",
					"action": "Compromise app key",
					"description": "Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/authentication/appkey"
						}
					}
				},
				{
					"name": "Auth Appkey Post",
					"value": "Auth Appkey Post",
					"action": "Request app key",
					"description": "Request a new app key by passing username and password for app account",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/authentication/appkey"
						}
					}
				},
				{
					"name": "Auth Appkey Put",
					"value": "Auth Appkey Put",
					"action": "Deactivate app key",
					"description": "Pass your app key to deactivate the key",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/authentication/appkey"
						}
					}
				},
				{
					"name": "Auth Authkey Get",
					"value": "Auth Authkey Get",
					"action": "Request auth key for user (login user)",
					"description": "Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/authentication/authkey"
						}
					}
				},
				{
					"name": "Auth Authkey Patch",
					"value": "Auth Authkey Patch",
					"action": "Compromise auth key",
					"description": "Mark user auth key as compromised",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/authentication/authkey"
						}
					}
				},
				{
					"name": "Auth Authkey Post",
					"value": "Auth Authkey Post",
					"action": "Request auth key for user (login user)",
					"description": "Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/authentication/authkey"
						}
					}
				},
				{
					"name": "Auth Authkey Put",
					"value": "Auth Authkey Put",
					"action": "Deactivate auth key (logout)",
					"description": "Deactivate auth key for user logging them out of your application",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/authentication/authkey"
						}
					}
				},
				{
					"name": "Auth Verifyotp Get",
					"value": "Auth Verifyotp Get",
					"action": "Verifies YubiKey OTP for authenticated user",
					"description": "Verifies YubiKey OTP for authenticated user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/authentication/verifyotp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /authentication/appkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Patch"
					]
				}
			}
		},
		{
			"displayName": "App Key",
			"name": "app_key",
			"required": true,
			"description": "compromised app key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Patch"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"description": "Comments (like how was this compromised)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "comments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Patch"
					]
				}
			}
		},
		{
			"displayName": "POST /authentication/appkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Post"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "Username assigned to your app",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Post"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"required": true,
			"description": "Password assigned to your app",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "password",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Post"
					]
				}
			}
		},
		{
			"displayName": "Supports Yubikey",
			"name": "supportsYubikey",
			"required": true,
			"description": "App supports YubiKey OTP",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "supportsYubikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /authentication/appkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Put"
					]
				}
			}
		},
		{
			"displayName": "App Key",
			"name": "app_key",
			"required": true,
			"description": "app key to deactivate",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "app_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Put"
					]
				}
			}
		},
		{
			"displayName": "X Auth (Header)",
			"name": "security_app_key",
			"type": "string",
			"default": "",
			"description": "API key for app_key (header: X-Auth)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Auth": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Appkey Put"
					]
				}
			}
		},
		{
			"displayName": "GET /authentication/authkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Get"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "Authenticated username",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Get"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"required": true,
			"description": "Authenticated password",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "password",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Get"
					]
				}
			}
		},
		{
			"displayName": "Otp",
			"name": "otp",
			"description": "YubiKey OTP (if configured for user)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "otp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Get"
					]
				}
			}
		},
		{
			"displayName": "Device Name",
			"name": "deviceName",
			"description": "User's device name",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "deviceName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Get"
					]
				}
			}
		},
		{
			"displayName": "Identifier For Vendor",
			"name": "identifierForVendor",
			"description": "identifierForVendor for User's Device (if app is iOS)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "identifierForVendor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Get"
					]
				}
			}
		},
		{
			"displayName": "X Auth (Header)",
			"name": "security_app_key",
			"type": "string",
			"default": "",
			"description": "API key for app_key (header: X-Auth)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Auth": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Get"
					]
				}
			}
		},
		{
			"displayName": "PATCH /authentication/authkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Patch"
					]
				}
			}
		},
		{
			"displayName": "Auth Key",
			"name": "auth_key",
			"required": true,
			"description": "auth key to mark as compromised",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Patch"
					]
				}
			}
		},
		{
			"displayName": "Comments",
			"name": "comments",
			"description": "Comments (like how was this compromised)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "comments",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Patch"
					]
				}
			}
		},
		{
			"displayName": "POST /authentication/authkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Post"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "Authenticated username",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "username",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Post"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"required": true,
			"description": "Authenticated password",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "password",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Post"
					]
				}
			}
		},
		{
			"displayName": "Otp",
			"name": "otp",
			"description": "YubiKey OTP (if configured for user)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "otp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Post"
					]
				}
			}
		},
		{
			"displayName": "X Auth (Header)",
			"name": "security_app_key",
			"type": "string",
			"default": "",
			"description": "API key for app_key (header: X-Auth)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Auth": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /authentication/authkey",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Put"
					]
				}
			}
		},
		{
			"displayName": "Auth Key",
			"name": "auth_key",
			"required": true,
			"description": "auth key to logout",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "auth_key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Put"
					]
				}
			}
		},
		{
			"displayName": "X Auth (Header)",
			"name": "security_app_key",
			"type": "string",
			"default": "",
			"description": "API key for app_key (header: X-Auth)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Auth": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Authkey Put"
					]
				}
			}
		},
		{
			"displayName": "GET /authentication/verifyotp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Verifyotp Get"
					]
				}
			}
		},
		{
			"displayName": "Otp",
			"name": "otp",
			"required": true,
			"description": "YubiKey OTP code",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "otp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Verifyotp Get"
					]
				}
			}
		},
		{
			"displayName": "X Auth (Header)",
			"name": "security_auth_key",
			"type": "string",
			"default": "",
			"description": "API key for auth_key (header: X-Auth)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Auth": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Verifyotp Get"
					]
				}
			}
		},
];
