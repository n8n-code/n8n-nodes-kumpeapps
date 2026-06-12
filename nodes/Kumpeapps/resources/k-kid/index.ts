import type { INodeProperties } from 'n8n-workflow';

export const kKidDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					]
				}
			},
			"options": [
				{
					"name": "Kkid Allowance Get",
					"value": "Kkid Allowance Get",
					"action": "returns allowance balance and allowance transactions",
					"description": "By passing in the appropriate options, you can view allowance balance and allowance transactions for a given user provided that they are within the masterID account of the authenticated user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/kkid/allowance"
						}
					}
				},
				{
					"name": "Kkid Allowance Post",
					"value": "Kkid Allowance Post",
					"action": "adds new allowance transaction to kidUserID",
					"description": "By passing in the appropriate options, you can add an allowance transaction to a given user.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kkid/allowance"
						}
					}
				},
				{
					"name": "Kkid Apns Post",
					"value": "Kkid Apns Post",
					"action": "subscribes/unsubscribes/registers for apns push notifications",
					"description": "subscribes/unsubscribes/registers for apns push notifications",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kkid/apns"
						}
					}
				},
				{
					"name": "Kkid Chorelist Delete",
					"value": "Kkid Chorelist Delete",
					"action": "deletes chore for given chore id",
					"description": "By passing in the appropriate options, you can delete a chore for the given chore id under authenticated user's master account\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/kkid/chorelist"
						}
					}
				},
				{
					"name": "Kkid Chorelist Get",
					"value": "Kkid Chorelist Get",
					"action": "returns list of chores for given user",
					"description": "By passing in the appropriate options, you can search for\nchores assigned to a given user within the authenticated user's master account\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/kkid/chorelist"
						}
					}
				},
				{
					"name": "Kkid Chorelist Post",
					"value": "Kkid Chorelist Post",
					"action": "adds chore for given user",
					"description": "By passing in the appropriate options, you can add a chore to given kid username under authenticated user's master account\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kkid/chorelist"
						}
					}
				},
				{
					"name": "Kkid Chorelist Put",
					"value": "Kkid Chorelist Put",
					"action": "updates chore for given chore id",
					"description": "By passing in the appropriate options, you can update the fields of a specific core within the authenticated user's master account\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/kkid/chorelist"
						}
					}
				},
				{
					"name": "Kkid Masteruser Post",
					"value": "Kkid Masteruser Post",
					"action": "adds new master user account",
					"description": "By passing in the appropriate variables this method creates a new user with master account access. (The use of this method is restricted to Superusers ONLY)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kkid/masteruser"
						}
					}
				},
				{
					"name": "Kkid Share Get",
					"value": "Kkid Share Get",
					"action": "Create Share Link",
					"description": "Create share link",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/kkid/share"
						}
					}
				},
				{
					"name": "Kkid User Get",
					"value": "Kkid User Get",
					"action": "Gets user info",
					"description": "Gets user info for authenticated user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/kkid/user"
						}
					}
				},
				{
					"name": "Kkid Userlist Delete",
					"value": "Kkid Userlist Delete",
					"action": "deletes user",
					"description": "By passing in the appropriate variables this method deletes the specified user. (This function is restricted to Superusers ONLY)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/kkid/userlist"
						}
					}
				},
				{
					"name": "Kkid Userlist Get",
					"value": "Kkid Userlist Get",
					"action": "returns list of users",
					"description": "By passing in the appropriate options, you can search for\nusers within the authenticated user's master account\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/kkid/userlist"
						}
					}
				},
				{
					"name": "Kkid Userlist Post",
					"value": "Kkid Userlist Post",
					"action": "adds new child user",
					"description": "By passing in the appropriate variables this method creates a new user and assigns it to the master account of the authenticated user. By default this user will have chores and allowance access.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kkid/userlist"
						}
					}
				},
				{
					"name": "Kkid Userlist Put",
					"value": "Kkid Userlist Put",
					"action": "updates user",
					"description": "By passing in the appropriate variables this method updates the user's profile\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/kkid/userlist"
						}
					}
				},
				{
					"name": "Kkid Wishlist Delete",
					"value": "Kkid Wishlist Delete",
					"action": "Delete item from wishlist",
					"description": "Delete item from wishlist",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/kkid/wishlist"
						}
					}
				},
				{
					"name": "Kkid Wishlist Get",
					"value": "Kkid Wishlist Get",
					"action": "Get list of wishlist items",
					"description": "Get list of wishlist items",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/kkid/wishlist"
						}
					}
				},
				{
					"name": "Kkid Wishlist Post",
					"value": "Kkid Wishlist Post",
					"action": "Add item to kid's wishlist",
					"description": "Add item to kid's wishlist",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/kkid/wishlist"
						}
					}
				},
				{
					"name": "Kkid Wishlist Put",
					"value": "Kkid Wishlist Put",
					"action": "Update item on kid's wishlist",
					"description": "Update item on kid's wishlist",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/kkid/wishlist"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /kkid/allowance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Get"
					]
				}
			}
		},
		{
			"displayName": "Kid User ID",
			"name": "kidUserId",
			"required": true,
			"description": "userID of the kid",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "kidUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Get"
					]
				}
			}
		},
		{
			"displayName": "Transaction Days",
			"name": "transactionDays",
			"description": "number of days you wish to search allowance transactions (default is 90 days)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "transactionDays",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Get"
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
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Get"
					]
				}
			}
		},
		{
			"displayName": "POST /kkid/allowance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Post"
					]
				}
			}
		},
		{
			"displayName": "Kid User ID",
			"name": "kidUserId",
			"required": true,
			"description": "userID of the kid",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "kidUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Post"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"required": true,
			"description": "amount you wish to Add/Subtract (subtract value should be a negative value)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "amount",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Post"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"required": true,
			"description": "Description (reason) of allowance transaction",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Post"
					]
				}
			}
		},
		{
			"displayName": "Transaction Type",
			"name": "transactionType",
			"required": true,
			"description": "Transaction Type (Add/Subtract)",
			"default": "Add",
			"type": "options",
			"options": [
				{
					"name": "Add",
					"value": "Add"
				},
				{
					"name": "Subtract",
					"value": "Subtract"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "transactionType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Post"
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
						"K Kid"
					],
					"operation": [
						"Kkid Allowance Post"
					]
				}
			}
		},
		{
			"displayName": "POST /kkid/apns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Kid User ID",
			"name": "kidUserId",
			"required": true,
			"description": "userID of the kid",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "kidUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Tool",
			"name": "tool",
			"required": true,
			"description": "tool you wish to talk to",
			"default": "register",
			"type": "options",
			"options": [
				{
					"name": "Register",
					"value": "register"
				},
				{
					"name": "Subscribe",
					"value": "subscribe"
				},
				{
					"name": "Unsubscribe",
					"value": "unsubscribe"
				},
				{
					"name": "Send",
					"value": "send"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "tool",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"description": "device APNS token (required for register)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "token",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Devicename",
			"name": "devicename",
			"description": "Name of device to associate to token (required for register)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "devicename",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "title of APNS message (required for send)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "message",
			"description": "APNS message body (required for send)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "message",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Badge",
			"name": "badge",
			"description": "Number for badge icon (optional for send)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "badge",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Sound",
			"name": "sound",
			"description": "Name of sound file to play for send notification (optional for send)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "sound",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Section",
			"name": "section",
			"description": "Notification section name (required for send/subscribe/unsubscribe)",
			"default": "Chores",
			"type": "options",
			"options": [
				{
					"name": "Chores",
					"value": "Chores"
				},
				{
					"name": "Chores New",
					"value": "Chores-New"
				},
				{
					"name": "Chores Reminders",
					"value": "Chores-Reminders"
				},
				{
					"name": "Allowance",
					"value": "Allowance"
				},
				{
					"name": "Allowance New",
					"value": "Allowance-New"
				},
				{
					"name": "Wish List",
					"value": "WishList"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "section",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"description": "Notification section name (optional for send, default is active)",
			"default": "passive",
			"type": "options",
			"options": [
				{
					"name": "Passive",
					"value": "passive"
				},
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Time Sensitive",
					"value": "time-sensitive"
				},
				{
					"name": "Critical",
					"value": "critical"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "priority",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
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
						"K Kid"
					],
					"operation": [
						"Kkid Apns Post"
					]
				}
			}
		},
		{
			"displayName": "DELETE /kkid/chorelist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Delete"
					]
				}
			}
		},
		{
			"displayName": "ID Chore List",
			"name": "idChoreList",
			"required": true,
			"description": "id of the chore you wish to delete",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "idChoreList",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Delete"
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
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /kkid/chorelist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "Kid Username",
			"name": "kidUsername",
			"description": "Username of kid you wish to search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "kidUsername",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"description": "Day of week for chores (Weekly for weekly chores)",
			"default": "Sunday",
			"type": "options",
			"options": [
				{
					"name": "Sunday",
					"value": "Sunday"
				},
				{
					"name": "Monday",
					"value": "Monday"
				},
				{
					"name": "Tuesday",
					"value": "Tuesday"
				},
				{
					"name": "Wednesday",
					"value": "Wednesday"
				},
				{
					"name": "Thursday",
					"value": "Thursday"
				},
				{
					"name": "Friday",
					"value": "Friday"
				},
				{
					"name": "Saturday",
					"value": "Saturday"
				},
				{
					"name": "Weekly",
					"value": "Weekly"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Status of Chore to search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "Block Dash",
			"name": "blockDash",
			"description": "Filter results by blockDash parameter",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "blockDash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "Optional",
			"name": "optional",
			"description": "Filter results by optional parameter",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "optional",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "Can Steal",
			"name": "canSteal",
			"description": "Filter results by canSteal parameter",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "canSteal",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "Include Calendar",
			"name": "includeCalendar",
			"description": "include calendar notations (default is false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includeCalendar",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
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
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Get"
					]
				}
			}
		},
		{
			"displayName": "POST /kkid/chorelist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Kid Username",
			"name": "kidUsername",
			"required": true,
			"description": "username of kid to assign the chore to.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "kidUsername",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Day",
			"name": "day",
			"description": "day of week (Monday, Tuesday....) for the chore. For weekly chores put Weekly or leave blank",
			"default": "Sunday",
			"type": "options",
			"options": [
				{
					"name": "Sunday",
					"value": "Sunday"
				},
				{
					"name": "Monday",
					"value": "Monday"
				},
				{
					"name": "Tuesday",
					"value": "Tuesday"
				},
				{
					"name": "Wednesday",
					"value": "Wednesday"
				},
				{
					"name": "Thursday",
					"value": "Thursday"
				},
				{
					"name": "Friday",
					"value": "Friday"
				},
				{
					"name": "Saturday",
					"value": "Saturday"
				},
				{
					"name": "Weekly",
					"value": "Weekly"
				},
				{
					"name": "Today",
					"value": "Today"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "day",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Nfc Tag",
			"name": "nfcTag",
			"description": "text field of nfc tag required to check off chore",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nfcTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "status of chore (default is todo)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Chore Name",
			"name": "choreName",
			"required": true,
			"description": "name of chore",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "choreName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Chore Description",
			"name": "choreDescription",
			"description": "optional chore description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "choreDescription",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Chore Number",
			"name": "choreNumber",
			"description": "number priority of chore (default is 5)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "choreNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Block Dash",
			"name": "blockDash",
			"description": "block dash option on this chore",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "blockDash",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "One Time",
			"name": "oneTime",
			"description": "mark as one time chore (does not repeat each week)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "oneTime",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Extra Allowance",
			"name": "extraAllowance",
			"description": "ammount of allowance added at end of week for completing this chore",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "extraAllowance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Optional",
			"name": "optional",
			"description": "mark as optional chore",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "optional",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Reassignable",
			"name": "reassignable",
			"description": "mark as reassignable (default is true)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "reassignable",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Can Steal",
			"name": "canSteal",
			"description": "mark as sibling can steal chore",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "canSteal",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"description": "date (yyyy-mm-dd) that you wish the chore to start showing up. (default is today)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "startDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"description": "notes added to chore (visable only on reports, kids do not see this note, this is mostly just for the developer)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "notes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Require Object Detection",
			"name": "requireObjectDetection",
			"description": "require use of camera to detect object detection tag order to check off chore",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "requireObjectDetection",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Object Detection Tag",
			"name": "objectDetectionTag",
			"description": "tag for object detection to search for (required if requireObjectDetection is true)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "objectDetectionTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Updated By Automation",
			"name": "updatedByAutomation",
			"description": "true if chore updated via API from an Automation System",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedByAutomation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Ai Icon",
			"name": "aiIcon",
			"description": "Notes if AI Icons should be used (n for no, y for yes, e for yes- error)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "aiIcon",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "Is Calendar",
			"name": "isCalendar",
			"description": "True if this is a calendar note instead of a chore.",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isCalendar",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
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
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /kkid/chorelist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "ID Chore List",
			"name": "idChoreList",
			"required": true,
			"description": "id number of chore you wish to update",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "idChoreList",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "new status of chore",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Stolen",
			"name": "stolen",
			"description": "mark chore as stolen by sibling",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "stolen",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Stolen By",
			"name": "stolenBy",
			"description": "username of sibling that stole the chore (required if stolen is true)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "stolenBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Nfc Tag",
			"name": "nfcTag",
			"description": "text field of NFC tag that is required to be scanned to check off this chore (normally null)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "nfcTag",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Notes",
			"name": "notes",
			"description": "notes field for chore",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "notes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Latitude",
			"name": "latitude",
			"description": "GPS latitude of where the chore was marked",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "latitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Longitude",
			"name": "longitude",
			"description": "GPS longitude of where the chore was marked",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "longitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Altitude",
			"name": "altitude",
			"description": "GPS altitude of where the chore was marked",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "altitude",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Updated By Automation",
			"name": "updatedByAutomation",
			"description": "true if updated via API by automation system",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "updatedByAutomation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Where Day",
			"name": "whereDay",
			"description": "Where day equals...",
			"default": "Sunday",
			"type": "options",
			"options": [
				{
					"name": "Sunday",
					"value": "Sunday"
				},
				{
					"name": "Monday",
					"value": "Monday"
				},
				{
					"name": "Tuesday",
					"value": "Tuesday"
				},
				{
					"name": "Wednesday",
					"value": "Wednesday"
				},
				{
					"name": "Thursday",
					"value": "Thursday"
				},
				{
					"name": "Friday",
					"value": "Friday"
				},
				{
					"name": "Saturday",
					"value": "Saturday"
				},
				{
					"name": "Weekly",
					"value": "Weekly"
				},
				{
					"name": "Today",
					"value": "Today"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "whereDay",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Where Status",
			"name": "whereStatus",
			"description": "Where status equals...",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "whereStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "Where Name",
			"name": "whereName",
			"description": "Where chore name equals...",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "whereName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
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
						"K Kid"
					],
					"operation": [
						"Kkid Chorelist Put"
					]
				}
			}
		},
		{
			"displayName": "POST /kkid/masteruser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Masteruser Post"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "username of user to create",
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
						"K Kid"
					],
					"operation": [
						"Kkid Masteruser Post"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"required": true,
			"description": "password of user to create",
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
						"K Kid"
					],
					"operation": [
						"Kkid Masteruser Post"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "email address of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Masteruser Post"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"required": true,
			"description": "First Name of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Masteruser Post"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"required": true,
			"description": "Last Name of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Masteruser Post"
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
						"K Kid"
					],
					"operation": [
						"Kkid Masteruser Post"
					]
				}
			}
		},
		{
			"displayName": "GET /kkid/share",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
					]
				}
			}
		},
		{
			"displayName": "Link User ID",
			"name": "linkUserId",
			"required": true,
			"description": "User ID that the link should be authenticated to",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "linkUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"required": true,
			"description": "Link to share",
			"default": "https://khome.kumpeapps.com/portal/wish-list.php",
			"type": "options",
			"options": [
				{
					"name": "HTTPS Khome Kumpeapps Com Portal Wish List Php",
					"value": "https://khome.kumpeapps.com/portal/wish-list.php"
				},
				{
					"name": "HTTPS Khome Kumpeapps Com Portal Chores Today Php",
					"value": "https://khome.kumpeapps.com/portal/chores-today.php"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "link",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
					]
				}
			}
		},
		{
			"displayName": "Scope",
			"name": "scope",
			"required": true,
			"description": "Authentication scope for link",
			"default": "WishList",
			"type": "options",
			"options": [
				{
					"name": "Wish List",
					"value": "WishList"
				},
				{
					"name": "Wish List Admin",
					"value": "WishListAdmin"
				},
				{
					"name": "Chores",
					"value": "Chores"
				},
				{
					"name": "Chores Admin",
					"value": "ChoresAdmin"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
					]
				}
			}
		},
		{
			"displayName": "Scope 2",
			"name": "scope2",
			"description": "Authentication scope for link",
			"default": "WishList",
			"type": "options",
			"options": [
				{
					"name": "Wish List",
					"value": "WishList"
				},
				{
					"name": "Wish List Admin",
					"value": "WishListAdmin"
				},
				{
					"name": "Chores",
					"value": "Chores"
				},
				{
					"name": "Chores Admin",
					"value": "ChoresAdmin"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope2",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
					]
				}
			}
		},
		{
			"displayName": "Scope 3",
			"name": "scope3",
			"description": "Authentication scope for link",
			"default": "WishList",
			"type": "options",
			"options": [
				{
					"name": "Wish List",
					"value": "WishList"
				},
				{
					"name": "Wish List Admin",
					"value": "WishListAdmin"
				},
				{
					"name": "Chores",
					"value": "Chores"
				},
				{
					"name": "Chores Admin",
					"value": "ChoresAdmin"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope3",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
					]
				}
			}
		},
		{
			"displayName": "Scope 4",
			"name": "scope4",
			"description": "Authentication scope for link",
			"default": "WishList",
			"type": "options",
			"options": [
				{
					"name": "Wish List",
					"value": "WishList"
				},
				{
					"name": "Wish List Admin",
					"value": "WishListAdmin"
				},
				{
					"name": "Chores",
					"value": "Chores"
				},
				{
					"name": "Chores Admin",
					"value": "ChoresAdmin"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "scope4",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
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
						"K Kid"
					],
					"operation": [
						"Kkid Share Get"
					]
				}
			}
		},
		{
			"displayName": "GET /kkid/user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid User Get"
					]
				}
			}
		},
		{
			"displayName": "Enable Bool",
			"name": "enableBool",
			"description": "Use bool values instead of Int 0/1",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableBool",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid User Get"
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
						"K Kid"
					],
					"operation": [
						"Kkid User Get"
					]
				}
			}
		},
		{
			"displayName": "DELETE /kkid/userlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Delete"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userID",
			"required": true,
			"description": "userID of the user you wish to delete",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "userID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Delete"
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /kkid/userlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "Is Child",
			"name": "isChild",
			"description": "Filter Search by isChild flag",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isChild",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "isActive",
			"description": "Filter Search by isActive flag",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isActive",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "isAdmin",
			"description": "Filter Search by isAdmin flag",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "isAdmin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "Enable Allowance",
			"name": "enableAllowance",
			"description": "Filter Search by enableAllowance flag",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableAllowance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "Enable Chores",
			"name": "enableChores",
			"description": "Filter Search by enableChores flag",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableChores",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userID",
			"description": "userID of user to search",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "userID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"description": "Username of user to search",
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"description": "Email address of user to search",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Get"
					]
				}
			}
		},
		{
			"displayName": "POST /kkid/userlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Post"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "username of user to create",
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Post"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"required": true,
			"description": "password of user to create",
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Post"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "email address of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Post"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"required": true,
			"description": "First Name of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Post"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"required": true,
			"description": "Last Name of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Post"
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /kkid/userlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userID",
			"required": true,
			"description": "userID of the user you wish to update",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "userID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "username of user to create",
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "email address of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"required": true,
			"description": "First Name of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"required": true,
			"description": "Last Name of user to create",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Emoji",
			"name": "emoji",
			"description": "emoji character for user",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "emoji",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Tmdb Key",
			"name": "tmdbKey",
			"description": "User's TMdB Session Key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "tmdbKey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Enable Wish List",
			"name": "enableWishList",
			"description": "set status of Wish List module enabled",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableWishList",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Enable Chores",
			"name": "enableChores",
			"description": "set status of chores module enabled",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableChores",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Enable Allowance",
			"name": "enableAllowance",
			"description": "set status of allowance module enabled",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableAllowance",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Enable Admin",
			"name": "enableAdmin",
			"description": "set status of isAdmin",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableAdmin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Enable Tmdb",
			"name": "enableTmdb",
			"description": "set status of enableTmdb (movie and tv search)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableTmdb",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "Enable Object Detection",
			"name": "enableObjectDetection",
			"description": "set status of enableObjectDetection",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "enableObjectDetection",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
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
						"K Kid"
					],
					"operation": [
						"Kkid Userlist Put"
					]
				}
			}
		},
		{
			"displayName": "DELETE /kkid/wishlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Delete"
					]
				}
			}
		},
		{
			"displayName": "Wish ID",
			"name": "wishId",
			"required": true,
			"description": "ID of wishlist item to delete",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "wishId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Delete"
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
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /kkid/wishlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Get"
					]
				}
			}
		},
		{
			"displayName": "Kid User ID",
			"name": "kidUserId",
			"description": "userID of the kid",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "kidUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Get"
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
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Get"
					]
				}
			}
		},
		{
			"displayName": "POST /kkid/wishlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Post"
					]
				}
			}
		},
		{
			"displayName": "Kid User ID",
			"name": "kidUserId",
			"required": true,
			"description": "userID of the kid",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "kidUserId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Post"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"required": true,
			"description": "Item title",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Post"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"description": "Item Description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Post"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"description": "Item Priority",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "priority",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Post"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"description": "URL Link to item",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Post"
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
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Post"
					]
				}
			}
		},
		{
			"displayName": "PUT /kkid/wishlist",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Put"
					]
				}
			}
		},
		{
			"displayName": "Wish ID",
			"name": "wishId",
			"required": true,
			"description": "Wish list item ID to update",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "wishId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Put"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"description": "Item title",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Put"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"description": "Item Description",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "description",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Put"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "priority",
			"description": "Item Priority",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "priority",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Put"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"description": "URL Link to item",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "link",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Put"
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
						"K Kid"
					],
					"operation": [
						"Kkid Wishlist Put"
					]
				}
			}
		},
];
