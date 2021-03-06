/**
 * Sample Data generated from a stock WordPress 4.7 install.
 *
 * Request data from GET http://local.graphql.dev/wp-json/?context=help
 */

const sampleReference = {
  "name": "WP GraphQL Dev Environment",
  "description": "Just another WordPress site",
  "url": "http://local.graphql.dev",
  "home": "http://local.graphql.dev",
  "namespaces": [
    "oembed/1.0",
    "wp/v2"
  ],
  "authentication": [],
  "routes": {
    "/": {
      "namespace": "",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view"
            }
          }
        }
      ],
      "_links": {
        "self": "http://local.graphql.dev/wp-json/"
      }
    },
    "/oembed/1.0": {
      "namespace": "oembed/1.0",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "namespace": {
              "required": false,
              "default": "oembed/1.0"
            },
            "context": {
              "required": false,
              "default": "view"
            }
          }
        }
      ],
      "_links": {
        "self": "http://local.graphql.dev/wp-json/oembed/1.0"
      }
    },
    "/oembed/1.0/embed": {
      "namespace": "oembed/1.0",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "url": {
              "required": true
            },
            "format": {
              "required": false,
              "default": "json"
            },
            "maxwidth": {
              "required": false,
              "default": 600
            }
          }
        }
      ],
      "_links": {
        "self": "http://local.graphql.dev/wp-json/oembed/1.0/embed"
      }
    },
    "/wp/v2": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "namespace": {
              "required": false,
              "default": "wp/v2"
            },
            "context": {
              "required": false,
              "default": "view"
            }
          }
        }
      ],
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2"
      }
    },
    "/wp/v2/posts": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "page": {
              "required": false,
              "default": 1,
              "description": "Current page of the collection.",
              "type": "integer"
            },
            "per_page": {
              "required": false,
              "default": 10,
              "description": "Maximum number of items to be returned in result set.",
              "type": "integer"
            },
            "search": {
              "required": false,
              "description": "Limit results to those matching a string.",
              "type": "string"
            },
            "after": {
              "required": false,
              "description": "Limit response to posts published after a given ISO8601 compliant date.",
              "type": "string"
            },
            "author": {
              "required": false,
              "default": [],
              "description": "Limit result set to posts assigned to specific authors.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "author_exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes posts assigned to specific authors.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "before": {
              "required": false,
              "description": "Limit response to posts published before a given ISO8601 compliant date.",
              "type": "string"
            },
            "exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "include": {
              "required": false,
              "default": [],
              "description": "Limit result set to specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "offset": {
              "required": false,
              "description": "Offset the result set by a specific number of items.",
              "type": "integer"
            },
            "order": {
              "required": false,
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ],
              "description": "Order sort attribute ascending or descending.",
              "type": "string"
            },
            "orderby": {
              "required": false,
              "default": "date",
              "enum": [
                "date",
                "relevance",
                "id",
                "include",
                "title",
                "slug"
              ],
              "description": "Sort collection by object attribute.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "Limit result set to posts with one or more specific slugs.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "status": {
              "required": false,
              "default": "publish",
              "description": "Limit result set to posts assigned one or more statuses.",
              "type": "array",
              "items": {
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "trash",
                  "auto-draft",
                  "inherit",
                  "customize-draft",
                  "any"
                ],
                "type": "string"
              }
            },
            "categories": {
              "required": false,
              "default": [],
              "description": "Limit result set to all items that have the specified term assigned in the categories taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "categories_exclude": {
              "required": false,
              "default": [],
              "description": "Limit result set to all items except those that have the specified term assigned in the categories taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "tags": {
              "required": false,
              "default": [],
              "description": "Limit result set to all items that have the specified term assigned in the tags taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "tags_exclude": {
              "required": false,
              "default": [],
              "description": "Limit result set to all items except those that have the specified term assigned in the tags taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "sticky": {
              "required": false,
              "description": "Limit result set to items that are sticky.",
              "type": "boolean"
            }
          }
        },
        {
          "methods": [
            "POST"
          ],
          "args": {
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the object unique to its type.",
              "type": "string"
            },
            "status": {
              "required": false,
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "description": "A named status for the object.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "A password to protect access to the content and excerpt.",
              "type": "string"
            },
            "title": {
              "required": false,
              "description": "The title for the object.",
              "type": "object"
            },
            "content": {
              "required": false,
              "description": "The content for the object.",
              "type": "object"
            },
            "author": {
              "required": false,
              "description": "The ID for the author of the object.",
              "type": "integer"
            },
            "excerpt": {
              "required": false,
              "description": "The excerpt for the object.",
              "type": "object"
            },
            "featured_media": {
              "required": false,
              "description": "The ID of the featured media for the object.",
              "type": "integer"
            },
            "comment_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not comments are open on the object.",
              "type": "string"
            },
            "ping_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not the object can be pinged.",
              "type": "string"
            },
            "format": {
              "required": false,
              "enum": [
                "standard",
                "aside",
                "image",
                "video",
                "quote",
                "link",
                "gallery",
                "audio"
              ],
              "description": "The format for the object.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            },
            "sticky": {
              "required": false,
              "description": "Whether or not the object should be treated as sticky.",
              "type": "boolean"
            },
            "template": {
              "required": false,
              "enum": [
                ""
              ],
              "description": "The theme file to use to display the object.",
              "type": "string"
            },
            "categories": {
              "required": false,
              "description": "The terms assigned to the object in the category taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "tags": {
              "required": false,
              "description": "The terms assigned to the object in the post_tag taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "post",
        "type": "object",
        "properties": {
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "status": {
            "description": "A named status for the object.",
            "type": "string",
            "enum": [
              "publish",
              "future",
              "draft",
              "pending",
              "private"
            ],
            "context": [
              "edit"
            ]
          },
          "type": {
            "description": "Type of Post for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "password": {
            "description": "A password to protect access to the content and excerpt.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "featured_media": {
            "description": "The ID of the featured media for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "comment_status": {
            "description": "Whether or not comments are open on the object.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "ping_status": {
            "description": "Whether or not the object can be pinged.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "format": {
            "description": "The format for the object.",
            "type": "string",
            "enum": [
              "standard",
              "aside",
              "image",
              "video",
              "quote",
              "link",
              "gallery",
              "audio"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          },
          "sticky": {
            "description": "Whether or not the object should be treated as sticky.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ]
          },
          "template": {
            "description": "The theme file to use to display the object.",
            "type": "string",
            "enum": [
              ""
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "categories": {
            "description": "The terms assigned to the object in the category taxonomy.",
            "type": "array",
            "items": {
              "type": "integer"
            },
            "context": [
              "view",
              "edit"
            ]
          },
          "tags": {
            "description": "The terms assigned to the object in the post_tag taxonomy.",
            "type": "array",
            "items": {
              "type": "integer"
            },
            "context": [
              "view",
              "edit"
            ]
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/posts"
      }
    },
    "/wp/v2/posts/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "The password for the post if it is password protected.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the object unique to its type.",
              "type": "string"
            },
            "status": {
              "required": false,
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "description": "A named status for the object.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "A password to protect access to the content and excerpt.",
              "type": "string"
            },
            "title": {
              "required": false,
              "description": "The title for the object.",
              "type": "object"
            },
            "content": {
              "required": false,
              "description": "The content for the object.",
              "type": "object"
            },
            "author": {
              "required": false,
              "description": "The ID for the author of the object.",
              "type": "integer"
            },
            "excerpt": {
              "required": false,
              "description": "The excerpt for the object.",
              "type": "object"
            },
            "featured_media": {
              "required": false,
              "description": "The ID of the featured media for the object.",
              "type": "integer"
            },
            "comment_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not comments are open on the object.",
              "type": "string"
            },
            "ping_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not the object can be pinged.",
              "type": "string"
            },
            "format": {
              "required": false,
              "enum": [
                "standard",
                "aside",
                "image",
                "video",
                "quote",
                "link",
                "gallery",
                "audio"
              ],
              "description": "The format for the object.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            },
            "sticky": {
              "required": false,
              "description": "Whether or not the object should be treated as sticky.",
              "type": "boolean"
            },
            "template": {
              "required": false,
              "enum": [
                ""
              ],
              "description": "The theme file to use to display the object.",
              "type": "string"
            },
            "categories": {
              "required": false,
              "description": "The terms assigned to the object in the category taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "tags": {
              "required": false,
              "description": "The terms assigned to the object in the post_tag taxonomy.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Whether to bypass trash and force deletion.",
              "type": "boolean"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "post",
        "type": "object",
        "properties": {
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "status": {
            "description": "A named status for the object.",
            "type": "string",
            "enum": [
              "publish",
              "future",
              "draft",
              "pending",
              "private"
            ],
            "context": [
              "edit"
            ]
          },
          "type": {
            "description": "Type of Post for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "password": {
            "description": "A password to protect access to the content and excerpt.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "featured_media": {
            "description": "The ID of the featured media for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "comment_status": {
            "description": "Whether or not comments are open on the object.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "ping_status": {
            "description": "Whether or not the object can be pinged.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "format": {
            "description": "The format for the object.",
            "type": "string",
            "enum": [
              "standard",
              "aside",
              "image",
              "video",
              "quote",
              "link",
              "gallery",
              "audio"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          },
          "sticky": {
            "description": "Whether or not the object should be treated as sticky.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ]
          },
          "template": {
            "description": "The theme file to use to display the object.",
            "type": "string",
            "enum": [
              ""
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "categories": {
            "description": "The terms assigned to the object in the category taxonomy.",
            "type": "array",
            "items": {
              "type": "integer"
            },
            "context": [
              "view",
              "edit"
            ]
          },
          "tags": {
            "description": "The terms assigned to the object in the post_tag taxonomy.",
            "type": "array",
            "items": {
              "type": "integer"
            },
            "context": [
              "view",
              "edit"
            ]
          }
        }
      }
    },
    "/wp/v2/posts/(?P<parent>[\\d]+)/revisions": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "post-revision",
        "type": "object",
        "properties": {
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          }
        }
      }
    },
    "/wp/v2/posts/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Required to be true, as revisions do not support trashing.",
              "type": "boolean"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "post-revision",
        "type": "object",
        "properties": {
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          }
        }
      }
    },
    "/wp/v2/pages": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "page": {
              "required": false,
              "default": 1,
              "description": "Current page of the collection.",
              "type": "integer"
            },
            "per_page": {
              "required": false,
              "default": 10,
              "description": "Maximum number of items to be returned in result set.",
              "type": "integer"
            },
            "search": {
              "required": false,
              "description": "Limit results to those matching a string.",
              "type": "string"
            },
            "after": {
              "required": false,
              "description": "Limit response to posts published after a given ISO8601 compliant date.",
              "type": "string"
            },
            "author": {
              "required": false,
              "default": [],
              "description": "Limit result set to posts assigned to specific authors.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "author_exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes posts assigned to specific authors.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "before": {
              "required": false,
              "description": "Limit response to posts published before a given ISO8601 compliant date.",
              "type": "string"
            },
            "exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "include": {
              "required": false,
              "default": [],
              "description": "Limit result set to specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "menu_order": {
              "required": false,
              "description": "Limit result set to posts with a specific menu_order value.",
              "type": "integer"
            },
            "offset": {
              "required": false,
              "description": "Offset the result set by a specific number of items.",
              "type": "integer"
            },
            "order": {
              "required": false,
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ],
              "description": "Order sort attribute ascending or descending.",
              "type": "string"
            },
            "orderby": {
              "required": false,
              "default": "date",
              "enum": [
                "date",
                "relevance",
                "id",
                "include",
                "title",
                "slug",
                "menu_order"
              ],
              "description": "Sort collection by object attribute.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "default": [],
              "description": "Limit result set to those of particular parent IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "parent_exclude": {
              "required": false,
              "default": [],
              "description": "Limit result set to all items except those of a particular parent ID.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "slug": {
              "required": false,
              "description": "Limit result set to posts with one or more specific slugs.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "status": {
              "required": false,
              "default": "publish",
              "description": "Limit result set to posts assigned one or more statuses.",
              "type": "array",
              "items": {
                "enum": [
                  "publish",
                  "future",
                  "draft",
                  "pending",
                  "private",
                  "trash",
                  "auto-draft",
                  "inherit",
                  "customize-draft",
                  "any"
                ],
                "type": "string"
              }
            }
          }
        },
        {
          "methods": [
            "POST"
          ],
          "args": {
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the object unique to its type.",
              "type": "string"
            },
            "status": {
              "required": false,
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "description": "A named status for the object.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "A password to protect access to the content and excerpt.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "description": "The ID for the parent of the object.",
              "type": "integer"
            },
            "title": {
              "required": false,
              "description": "The title for the object.",
              "type": "object"
            },
            "content": {
              "required": false,
              "description": "The content for the object.",
              "type": "object"
            },
            "author": {
              "required": false,
              "description": "The ID for the author of the object.",
              "type": "integer"
            },
            "excerpt": {
              "required": false,
              "description": "The excerpt for the object.",
              "type": "object"
            },
            "featured_media": {
              "required": false,
              "description": "The ID of the featured media for the object.",
              "type": "integer"
            },
            "comment_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not comments are open on the object.",
              "type": "string"
            },
            "ping_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not the object can be pinged.",
              "type": "string"
            },
            "menu_order": {
              "required": false,
              "description": "The order of the object in relation to other object of its type.",
              "type": "integer"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            },
            "template": {
              "required": false,
              "enum": [
                ""
              ],
              "description": "The theme file to use to display the object.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "page",
        "type": "object",
        "properties": {
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "status": {
            "description": "A named status for the object.",
            "type": "string",
            "enum": [
              "publish",
              "future",
              "draft",
              "pending",
              "private"
            ],
            "context": [
              "edit"
            ]
          },
          "type": {
            "description": "Type of Post for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "password": {
            "description": "A password to protect access to the content and excerpt.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "featured_media": {
            "description": "The ID of the featured media for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "comment_status": {
            "description": "Whether or not comments are open on the object.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "ping_status": {
            "description": "Whether or not the object can be pinged.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "menu_order": {
            "description": "The order of the object in relation to other object of its type.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          },
          "template": {
            "description": "The theme file to use to display the object.",
            "type": "string",
            "enum": [
              ""
            ],
            "context": [
              "view",
              "edit"
            ]
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/pages"
      }
    },
    "/wp/v2/pages/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "The password for the post if it is password protected.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the object unique to its type.",
              "type": "string"
            },
            "status": {
              "required": false,
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "description": "A named status for the object.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "A password to protect access to the content and excerpt.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "description": "The ID for the parent of the object.",
              "type": "integer"
            },
            "title": {
              "required": false,
              "description": "The title for the object.",
              "type": "object"
            },
            "content": {
              "required": false,
              "description": "The content for the object.",
              "type": "object"
            },
            "author": {
              "required": false,
              "description": "The ID for the author of the object.",
              "type": "integer"
            },
            "excerpt": {
              "required": false,
              "description": "The excerpt for the object.",
              "type": "object"
            },
            "featured_media": {
              "required": false,
              "description": "The ID of the featured media for the object.",
              "type": "integer"
            },
            "comment_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not comments are open on the object.",
              "type": "string"
            },
            "ping_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not the object can be pinged.",
              "type": "string"
            },
            "menu_order": {
              "required": false,
              "description": "The order of the object in relation to other object of its type.",
              "type": "integer"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            },
            "template": {
              "required": false,
              "enum": [
                ""
              ],
              "description": "The theme file to use to display the object.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Whether to bypass trash and force deletion.",
              "type": "boolean"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "page",
        "type": "object",
        "properties": {
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "status": {
            "description": "A named status for the object.",
            "type": "string",
            "enum": [
              "publish",
              "future",
              "draft",
              "pending",
              "private"
            ],
            "context": [
              "edit"
            ]
          },
          "type": {
            "description": "Type of Post for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "password": {
            "description": "A password to protect access to the content and excerpt.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "featured_media": {
            "description": "The ID of the featured media for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "comment_status": {
            "description": "Whether or not comments are open on the object.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "ping_status": {
            "description": "Whether or not the object can be pinged.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "menu_order": {
            "description": "The order of the object in relation to other object of its type.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          },
          "template": {
            "description": "The theme file to use to display the object.",
            "type": "string",
            "enum": [
              ""
            ],
            "context": [
              "view",
              "edit"
            ]
          }
        }
      }
    },
    "/wp/v2/pages/(?P<parent>[\\d]+)/revisions": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "page-revision",
        "type": "object",
        "properties": {
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          }
        }
      }
    },
    "/wp/v2/pages/(?P<parent>[\\d]+)/revisions/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Required to be true, as revisions do not support trashing.",
              "type": "boolean"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "page-revision",
        "type": "object",
        "properties": {
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the content is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "excerpt": {
            "description": "The excerpt for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Excerpt for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML excerpt for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              },
              "protected": {
                "description": "Whether the excerpt is protected with a password.",
                "type": "boolean",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          }
        }
      }
    },
    "/wp/v2/media": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "page": {
              "required": false,
              "default": 1,
              "description": "Current page of the collection.",
              "type": "integer"
            },
            "per_page": {
              "required": false,
              "default": 10,
              "description": "Maximum number of items to be returned in result set.",
              "type": "integer"
            },
            "search": {
              "required": false,
              "description": "Limit results to those matching a string.",
              "type": "string"
            },
            "after": {
              "required": false,
              "description": "Limit response to posts published after a given ISO8601 compliant date.",
              "type": "string"
            },
            "author": {
              "required": false,
              "default": [],
              "description": "Limit result set to posts assigned to specific authors.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "author_exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes posts assigned to specific authors.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "before": {
              "required": false,
              "description": "Limit response to posts published before a given ISO8601 compliant date.",
              "type": "string"
            },
            "exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "include": {
              "required": false,
              "default": [],
              "description": "Limit result set to specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "offset": {
              "required": false,
              "description": "Offset the result set by a specific number of items.",
              "type": "integer"
            },
            "order": {
              "required": false,
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ],
              "description": "Order sort attribute ascending or descending.",
              "type": "string"
            },
            "orderby": {
              "required": false,
              "default": "date",
              "enum": [
                "date",
                "relevance",
                "id",
                "include",
                "title",
                "slug"
              ],
              "description": "Sort collection by object attribute.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "default": [],
              "description": "Limit result set to those of particular parent IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "parent_exclude": {
              "required": false,
              "default": [],
              "description": "Limit result set to all items except those of a particular parent ID.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "slug": {
              "required": false,
              "description": "Limit result set to posts with one or more specific slugs.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "status": {
              "required": false,
              "default": "inherit",
              "description": "Limit result set to posts assigned one or more statuses.",
              "type": "array",
              "items": {
                "enum": [
                  "inherit",
                  "private",
                  "trash"
                ],
                "type": "string"
              }
            },
            "media_type": {
              "required": false,
              "enum": [
                "image",
                "video",
                "text",
                "application",
                "audio"
              ],
              "description": "Limit result set to attachments of a particular media type.",
              "type": "string"
            },
            "mime_type": {
              "required": false,
              "description": "Limit result set to attachments of a particular MIME type.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST"
          ],
          "args": {
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the object unique to its type.",
              "type": "string"
            },
            "status": {
              "required": false,
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "description": "A named status for the object.",
              "type": "string"
            },
            "title": {
              "required": false,
              "description": "The title for the object.",
              "type": "object"
            },
            "author": {
              "required": false,
              "description": "The ID for the author of the object.",
              "type": "integer"
            },
            "comment_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not comments are open on the object.",
              "type": "string"
            },
            "ping_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not the object can be pinged.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            },
            "template": {
              "required": false,
              "enum": [
                ""
              ],
              "description": "The theme file to use to display the object.",
              "type": "string"
            },
            "alt_text": {
              "required": false,
              "description": "Alternative text to display when attachment is not displayed.",
              "type": "string"
            },
            "caption": {
              "required": false,
              "description": "The attachment caption.",
              "type": "object"
            },
            "description": {
              "required": false,
              "description": "The attachment description.",
              "type": "object"
            },
            "post": {
              "required": false,
              "description": "The ID for the associated post of the attachment.",
              "type": "integer"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "attachment",
        "type": "object",
        "properties": {
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "status": {
            "description": "A named status for the object.",
            "type": "string",
            "enum": [
              "publish",
              "future",
              "draft",
              "pending",
              "private"
            ],
            "context": [
              "edit"
            ]
          },
          "type": {
            "description": "Type of Post for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "comment_status": {
            "description": "Whether or not comments are open on the object.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "ping_status": {
            "description": "Whether or not the object can be pinged.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          },
          "template": {
            "description": "The theme file to use to display the object.",
            "type": "string",
            "enum": [
              ""
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "alt_text": {
            "description": "Alternative text to display when attachment is not displayed.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "caption": {
            "description": "The attachment caption.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Caption for the attachment, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML caption for the attachment, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "description": {
            "description": "The attachment description.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Description for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML description for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "media_type": {
            "description": "Attachment type.",
            "type": "string",
            "enum": [
              "image",
              "file"
            ],
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "mime_type": {
            "description": "The attachment MIME type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "media_details": {
            "description": "Details about the media file, specific to its type.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "post": {
            "description": "The ID for the associated post of the attachment.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "source_url": {
            "description": "URL to the original attachment file.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/media"
      }
    },
    "/wp/v2/media/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "The password for the post if it is password protected.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the object unique to its type.",
              "type": "string"
            },
            "status": {
              "required": false,
              "enum": [
                "publish",
                "future",
                "draft",
                "pending",
                "private"
              ],
              "description": "A named status for the object.",
              "type": "string"
            },
            "title": {
              "required": false,
              "description": "The title for the object.",
              "type": "object"
            },
            "author": {
              "required": false,
              "description": "The ID for the author of the object.",
              "type": "integer"
            },
            "comment_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not comments are open on the object.",
              "type": "string"
            },
            "ping_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Whether or not the object can be pinged.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            },
            "template": {
              "required": false,
              "enum": [
                ""
              ],
              "description": "The theme file to use to display the object.",
              "type": "string"
            },
            "alt_text": {
              "required": false,
              "description": "Alternative text to display when attachment is not displayed.",
              "type": "string"
            },
            "caption": {
              "required": false,
              "description": "The attachment caption.",
              "type": "object"
            },
            "description": {
              "required": false,
              "description": "The attachment description.",
              "type": "object"
            },
            "post": {
              "required": false,
              "description": "The ID for the associated post of the attachment.",
              "type": "integer"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Whether to bypass trash and force deletion.",
              "type": "boolean"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "attachment",
        "type": "object",
        "properties": {
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "guid": {
            "description": "The globally unique identifier for the object.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "raw": {
                "description": "GUID for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ],
                "readonly": true
              },
              "rendered": {
                "description": "GUID for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "modified": {
            "description": "The date the object was last modified, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "modified_gmt": {
            "description": "The date the object was last modified, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the object unique to its type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "status": {
            "description": "A named status for the object.",
            "type": "string",
            "enum": [
              "publish",
              "future",
              "draft",
              "pending",
              "private"
            ],
            "context": [
              "edit"
            ]
          },
          "type": {
            "description": "Type of Post for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "title": {
            "description": "The title for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Title for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML title for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "author": {
            "description": "The ID for the author of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "comment_status": {
            "description": "Whether or not comments are open on the object.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "ping_status": {
            "description": "Whether or not the object can be pinged.",
            "type": "string",
            "enum": [
              "open",
              "closed"
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          },
          "template": {
            "description": "The theme file to use to display the object.",
            "type": "string",
            "enum": [
              ""
            ],
            "context": [
              "view",
              "edit"
            ]
          },
          "alt_text": {
            "description": "Alternative text to display when attachment is not displayed.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "caption": {
            "description": "The attachment caption.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Caption for the attachment, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML caption for the attachment, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "description": {
            "description": "The attachment description.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": {
              "raw": {
                "description": "Description for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML description for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit"
                ],
                "readonly": true
              }
            }
          },
          "media_type": {
            "description": "Attachment type.",
            "type": "string",
            "enum": [
              "image",
              "file"
            ],
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "mime_type": {
            "description": "The attachment MIME type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "media_details": {
            "description": "Details about the media file, specific to its type.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "post": {
            "description": "The ID for the associated post of the attachment.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "source_url": {
            "description": "URL to the original attachment file.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          }
        }
      }
    },
    "/wp/v2/types": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "type",
        "type": "object",
        "properties": {
          "capabilities": {
            "description": "All capabilities used by the post type.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "A human-readable description of the post type.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "hierarchical": {
            "description": "Whether or not the post type should have children.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "labels": {
            "description": "Human-readable labels for the post type for various contexts.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "The title for the post type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the post type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "taxonomies": {
            "description": "Taxonomies associated with post type.",
            "type": "array",
            "items": {
              "type": "string"
            },
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "rest_base": {
            "description": "REST base route for the post type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/types"
      }
    },
    "/wp/v2/types/(?P<type>[\\w-]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "type",
        "type": "object",
        "properties": {
          "capabilities": {
            "description": "All capabilities used by the post type.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "A human-readable description of the post type.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "hierarchical": {
            "description": "Whether or not the post type should have children.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "labels": {
            "description": "Human-readable labels for the post type for various contexts.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "The title for the post type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the post type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "taxonomies": {
            "description": "Taxonomies associated with post type.",
            "type": "array",
            "items": {
              "type": "string"
            },
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "rest_base": {
            "description": "REST base route for the post type.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          }
        }
      }
    },
    "/wp/v2/statuses": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "status",
        "type": "object",
        "properties": {
          "name": {
            "description": "The title for the status.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "private": {
            "description": "Whether posts with this status should be private.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "protected": {
            "description": "Whether posts with this status should be protected.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "public": {
            "description": "Whether posts of this status should be shown in the front end of the site.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "queryable": {
            "description": "Whether posts with this status should be publicly-queryable.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "show_in_list": {
            "description": "Whether to include posts in the edit listing for their post type.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the status.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/statuses"
      }
    },
    "/wp/v2/statuses/(?P<status>[\\w-]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "status",
        "type": "object",
        "properties": {
          "name": {
            "description": "The title for the status.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "private": {
            "description": "Whether posts with this status should be private.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "protected": {
            "description": "Whether posts with this status should be protected.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "public": {
            "description": "Whether posts of this status should be shown in the front end of the site.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "queryable": {
            "description": "Whether posts with this status should be publicly-queryable.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "show_in_list": {
            "description": "Whether to include posts in the edit listing for their post type.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the status.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          }
        }
      }
    },
    "/wp/v2/taxonomies": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "type": {
              "required": false,
              "description": "Limit results to taxonomies associated with a specific post type.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "taxonomy",
        "type": "object",
        "properties": {
          "capabilities": {
            "description": "All capabilities used by the taxonomy.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "A human-readable description of the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "hierarchical": {
            "description": "Whether or not the taxonomy should have children.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "labels": {
            "description": "Human-readable labels for the taxonomy for various contexts.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "The title for the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "show_cloud": {
            "description": "Whether or not the term cloud should be displayed.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "types": {
            "description": "Types associated with the taxonomy.",
            "type": "array",
            "items": {
              "type": "string"
            },
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "rest_base": {
            "description": "REST base route for the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/taxonomies"
      }
    },
    "/wp/v2/taxonomies/(?P<taxonomy>[\\w-]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "taxonomy",
        "type": "object",
        "properties": {
          "capabilities": {
            "description": "All capabilities used by the taxonomy.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "A human-readable description of the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "hierarchical": {
            "description": "Whether or not the taxonomy should have children.",
            "type": "boolean",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "labels": {
            "description": "Human-readable labels for the taxonomy for various contexts.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "The title for the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "show_cloud": {
            "description": "Whether or not the term cloud should be displayed.",
            "type": "boolean",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "types": {
            "description": "Types associated with the taxonomy.",
            "type": "array",
            "items": {
              "type": "string"
            },
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "rest_base": {
            "description": "REST base route for the taxonomy.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          }
        }
      }
    },
    "/wp/v2/categories": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "page": {
              "required": false,
              "default": 1,
              "description": "Current page of the collection.",
              "type": "integer"
            },
            "per_page": {
              "required": false,
              "default": 10,
              "description": "Maximum number of items to be returned in result set.",
              "type": "integer"
            },
            "search": {
              "required": false,
              "description": "Limit results to those matching a string.",
              "type": "string"
            },
            "exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "include": {
              "required": false,
              "default": [],
              "description": "Limit result set to specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "order": {
              "required": false,
              "default": "asc",
              "enum": [
                "asc",
                "desc"
              ],
              "description": "Order sort attribute ascending or descending.",
              "type": "string"
            },
            "orderby": {
              "required": false,
              "default": "name",
              "enum": [
                "id",
                "include",
                "name",
                "slug",
                "term_group",
                "description",
                "count"
              ],
              "description": "Sort collection by term attribute.",
              "type": "string"
            },
            "hide_empty": {
              "required": false,
              "default": false,
              "description": "Whether to hide terms not assigned to any posts.",
              "type": "boolean"
            },
            "parent": {
              "required": false,
              "description": "Limit result set to terms assigned to a specific parent.",
              "type": "integer"
            },
            "post": {
              "required": false,
              "description": "Limit result set to terms assigned to a specific post.",
              "type": "integer"
            },
            "slug": {
              "required": false,
              "description": "Limit result set to terms with a specific slug.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST"
          ],
          "args": {
            "description": {
              "required": false,
              "description": "HTML description of the term.",
              "type": "string"
            },
            "name": {
              "required": true,
              "description": "HTML title for the term.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the term unique to its type.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "description": "The parent term ID.",
              "type": "integer"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "category",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the term.",
            "type": "integer",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "count": {
            "description": "Number of published posts for the term.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "HTML description of the term.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "URL of the term.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "HTML title for the term.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "required": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the term unique to its type.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ]
          },
          "taxonomy": {
            "description": "Type attribution for the term.",
            "type": "string",
            "enum": [
              "category",
              "post_tag",
              "nav_menu",
              "link_category",
              "post_format"
            ],
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "parent": {
            "description": "The parent term ID.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/categories"
      }
    },
    "/wp/v2/categories/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "description": {
              "required": false,
              "description": "HTML description of the term.",
              "type": "string"
            },
            "name": {
              "required": false,
              "description": "HTML title for the term.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the term unique to its type.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "description": "The parent term ID.",
              "type": "integer"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Required to be true, as terms do not support trashing.",
              "type": "boolean"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "category",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the term.",
            "type": "integer",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "count": {
            "description": "Number of published posts for the term.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "HTML description of the term.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "URL of the term.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "HTML title for the term.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "required": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the term unique to its type.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ]
          },
          "taxonomy": {
            "description": "Type attribution for the term.",
            "type": "string",
            "enum": [
              "category",
              "post_tag",
              "nav_menu",
              "link_category",
              "post_format"
            ],
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "parent": {
            "description": "The parent term ID.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ]
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      }
    },
    "/wp/v2/tags": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "page": {
              "required": false,
              "default": 1,
              "description": "Current page of the collection.",
              "type": "integer"
            },
            "per_page": {
              "required": false,
              "default": 10,
              "description": "Maximum number of items to be returned in result set.",
              "type": "integer"
            },
            "search": {
              "required": false,
              "description": "Limit results to those matching a string.",
              "type": "string"
            },
            "exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "include": {
              "required": false,
              "default": [],
              "description": "Limit result set to specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "offset": {
              "required": false,
              "description": "Offset the result set by a specific number of items.",
              "type": "integer"
            },
            "order": {
              "required": false,
              "default": "asc",
              "enum": [
                "asc",
                "desc"
              ],
              "description": "Order sort attribute ascending or descending.",
              "type": "string"
            },
            "orderby": {
              "required": false,
              "default": "name",
              "enum": [
                "id",
                "include",
                "name",
                "slug",
                "term_group",
                "description",
                "count"
              ],
              "description": "Sort collection by term attribute.",
              "type": "string"
            },
            "hide_empty": {
              "required": false,
              "default": false,
              "description": "Whether to hide terms not assigned to any posts.",
              "type": "boolean"
            },
            "post": {
              "required": false,
              "description": "Limit result set to terms assigned to a specific post.",
              "type": "integer"
            },
            "slug": {
              "required": false,
              "description": "Limit result set to terms with a specific slug.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST"
          ],
          "args": {
            "description": {
              "required": false,
              "description": "HTML description of the term.",
              "type": "string"
            },
            "name": {
              "required": true,
              "description": "HTML title for the term.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the term unique to its type.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "tag",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the term.",
            "type": "integer",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "count": {
            "description": "Number of published posts for the term.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "HTML description of the term.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "URL of the term.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "HTML title for the term.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "required": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the term unique to its type.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ]
          },
          "taxonomy": {
            "description": "Type attribution for the term.",
            "type": "string",
            "enum": [
              "category",
              "post_tag",
              "nav_menu",
              "link_category",
              "post_format"
            ],
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/tags"
      }
    },
    "/wp/v2/tags/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "description": {
              "required": false,
              "description": "HTML description of the term.",
              "type": "string"
            },
            "name": {
              "required": false,
              "description": "HTML title for the term.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the term unique to its type.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Required to be true, as terms do not support trashing.",
              "type": "boolean"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "tag",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the term.",
            "type": "integer",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "count": {
            "description": "Number of published posts for the term.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ],
            "readonly": true
          },
          "description": {
            "description": "HTML description of the term.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "URL of the term.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "name": {
            "description": "HTML title for the term.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "required": true
          },
          "slug": {
            "description": "An alphanumeric identifier for the term unique to its type.",
            "type": "string",
            "context": [
              "view",
              "embed",
              "edit"
            ]
          },
          "taxonomy": {
            "description": "Type attribution for the term.",
            "type": "string",
            "enum": [
              "category",
              "post_tag",
              "nav_menu",
              "link_category",
              "post_format"
            ],
            "context": [
              "view",
              "embed",
              "edit"
            ],
            "readonly": true
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      }
    },
    "/wp/v2/users": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "page": {
              "required": false,
              "default": 1,
              "description": "Current page of the collection.",
              "type": "integer"
            },
            "per_page": {
              "required": false,
              "default": 10,
              "description": "Maximum number of items to be returned in result set.",
              "type": "integer"
            },
            "search": {
              "required": false,
              "description": "Limit results to those matching a string.",
              "type": "string"
            },
            "exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "include": {
              "required": false,
              "default": [],
              "description": "Limit result set to specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "offset": {
              "required": false,
              "description": "Offset the result set by a specific number of items.",
              "type": "integer"
            },
            "order": {
              "required": false,
              "default": "asc",
              "enum": [
                "asc",
                "desc"
              ],
              "description": "Order sort attribute ascending or descending.",
              "type": "string"
            },
            "orderby": {
              "required": false,
              "default": "name",
              "enum": [
                "id",
                "include",
                "name",
                "registered_date",
                "slug",
                "email",
                "url"
              ],
              "description": "Sort collection by object attribute.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "Limit result set to users with a specific slug.",
              "type": "string"
            },
            "roles": {
              "required": false,
              "description": "Limit result set to users matching at least one specific role provided. Accepts csv list or single role.",
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        {
          "methods": [
            "POST"
          ],
          "args": {
            "username": {
              "required": true,
              "description": "Login name for the user.",
              "type": "string"
            },
            "name": {
              "required": false,
              "description": "Display name for the user.",
              "type": "string"
            },
            "first_name": {
              "required": false,
              "description": "First name for the user.",
              "type": "string"
            },
            "last_name": {
              "required": false,
              "description": "Last name for the user.",
              "type": "string"
            },
            "email": {
              "required": true,
              "description": "The email address for the user.",
              "type": "string"
            },
            "url": {
              "required": false,
              "description": "URL of the user.",
              "type": "string"
            },
            "description": {
              "required": false,
              "description": "Description of the user.",
              "type": "string"
            },
            "locale": {
              "required": false,
              "enum": [
                "",
                "en_US"
              ],
              "description": "Locale for the user.",
              "type": "string"
            },
            "nickname": {
              "required": false,
              "description": "The nickname for the user.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the user.",
              "type": "string"
            },
            "roles": {
              "required": false,
              "description": "Roles assigned to the user.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "password": {
              "required": true,
              "description": "Password for the user (never included).",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "user",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the user.",
            "type": "integer",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "username": {
            "description": "Login name for the user.",
            "type": "string",
            "context": [
              "edit"
            ],
            "required": true
          },
          "name": {
            "description": "Display name for the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "first_name": {
            "description": "First name for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "last_name": {
            "description": "Last name for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "email": {
            "description": "The email address for the user.",
            "type": "string",
            "format": "email",
            "context": [
              "edit"
            ],
            "required": true
          },
          "url": {
            "description": "URL of the user.",
            "type": "string",
            "format": "uri",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "description": {
            "description": "Description of the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "Author URL of the user.",
            "type": "string",
            "format": "uri",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "locale": {
            "description": "Locale for the user.",
            "type": "string",
            "enum": [
              "",
              "en_US"
            ],
            "context": [
              "edit"
            ]
          },
          "nickname": {
            "description": "The nickname for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "slug": {
            "description": "An alphanumeric identifier for the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "registered_date": {
            "description": "Registration date for the user.",
            "type": "string",
            "format": "date-time",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "roles": {
            "description": "Roles assigned to the user.",
            "type": "array",
            "items": {
              "type": "string"
            },
            "context": [
              "edit"
            ]
          },
          "password": {
            "description": "Password for the user (never included).",
            "type": "string",
            "context": [],
            "required": true
          },
          "capabilities": {
            "description": "All capabilities assigned to the user.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "extra_capabilities": {
            "description": "Any extra capabilities assigned to the user.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "avatar_urls": {
            "description": "Avatar URLs for the user.",
            "type": "object",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "24": {
                "description": "Avatar URL with image size of 24 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "48": {
                "description": "Avatar URL with image size of 48 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "96": {
                "description": "Avatar URL with image size of 96 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              }
            }
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/users"
      }
    },
    "/wp/v2/users/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "username": {
              "required": false,
              "description": "Login name for the user.",
              "type": "string"
            },
            "name": {
              "required": false,
              "description": "Display name for the user.",
              "type": "string"
            },
            "first_name": {
              "required": false,
              "description": "First name for the user.",
              "type": "string"
            },
            "last_name": {
              "required": false,
              "description": "Last name for the user.",
              "type": "string"
            },
            "email": {
              "required": false,
              "description": "The email address for the user.",
              "type": "string"
            },
            "url": {
              "required": false,
              "description": "URL of the user.",
              "type": "string"
            },
            "description": {
              "required": false,
              "description": "Description of the user.",
              "type": "string"
            },
            "locale": {
              "required": false,
              "enum": [
                "",
                "en_US"
              ],
              "description": "Locale for the user.",
              "type": "string"
            },
            "nickname": {
              "required": false,
              "description": "The nickname for the user.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the user.",
              "type": "string"
            },
            "roles": {
              "required": false,
              "description": "Roles assigned to the user.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "password": {
              "required": false,
              "description": "Password for the user (never included).",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Required to be true, as users do not support trashing.",
              "type": "boolean"
            },
            "reassign": {
              "required": true,
              "description": "Reassign the deleted user's posts and links to this user ID.",
              "type": "integer"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "user",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the user.",
            "type": "integer",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "username": {
            "description": "Login name for the user.",
            "type": "string",
            "context": [
              "edit"
            ],
            "required": true
          },
          "name": {
            "description": "Display name for the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "first_name": {
            "description": "First name for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "last_name": {
            "description": "Last name for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "email": {
            "description": "The email address for the user.",
            "type": "string",
            "format": "email",
            "context": [
              "edit"
            ],
            "required": true
          },
          "url": {
            "description": "URL of the user.",
            "type": "string",
            "format": "uri",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "description": {
            "description": "Description of the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "Author URL of the user.",
            "type": "string",
            "format": "uri",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "locale": {
            "description": "Locale for the user.",
            "type": "string",
            "enum": [
              "",
              "en_US"
            ],
            "context": [
              "edit"
            ]
          },
          "nickname": {
            "description": "The nickname for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "slug": {
            "description": "An alphanumeric identifier for the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "registered_date": {
            "description": "Registration date for the user.",
            "type": "string",
            "format": "date-time",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "roles": {
            "description": "Roles assigned to the user.",
            "type": "array",
            "items": {
              "type": "string"
            },
            "context": [
              "edit"
            ]
          },
          "password": {
            "description": "Password for the user (never included).",
            "type": "string",
            "context": [],
            "required": true
          },
          "capabilities": {
            "description": "All capabilities assigned to the user.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "extra_capabilities": {
            "description": "Any extra capabilities assigned to the user.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "avatar_urls": {
            "description": "Avatar URLs for the user.",
            "type": "object",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "24": {
                "description": "Avatar URL with image size of 24 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "48": {
                "description": "Avatar URL with image size of 48 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "96": {
                "description": "Avatar URL with image size of 96 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              }
            }
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      }
    },
    "/wp/v2/users/me": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "username": {
              "required": false,
              "description": "Login name for the user.",
              "type": "string"
            },
            "name": {
              "required": false,
              "description": "Display name for the user.",
              "type": "string"
            },
            "first_name": {
              "required": false,
              "description": "First name for the user.",
              "type": "string"
            },
            "last_name": {
              "required": false,
              "description": "Last name for the user.",
              "type": "string"
            },
            "email": {
              "required": false,
              "description": "The email address for the user.",
              "type": "string"
            },
            "url": {
              "required": false,
              "description": "URL of the user.",
              "type": "string"
            },
            "description": {
              "required": false,
              "description": "Description of the user.",
              "type": "string"
            },
            "locale": {
              "required": false,
              "enum": [
                "",
                "en_US"
              ],
              "description": "Locale for the user.",
              "type": "string"
            },
            "nickname": {
              "required": false,
              "description": "The nickname for the user.",
              "type": "string"
            },
            "slug": {
              "required": false,
              "description": "An alphanumeric identifier for the user.",
              "type": "string"
            },
            "roles": {
              "required": false,
              "description": "Roles assigned to the user.",
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "password": {
              "required": false,
              "description": "Password for the user (never included).",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Required to be true, as users do not support trashing.",
              "type": "boolean"
            },
            "reassign": {
              "required": true,
              "description": "Reassign the deleted user's posts and links to this user ID.",
              "type": "integer"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "user",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the user.",
            "type": "integer",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "username": {
            "description": "Login name for the user.",
            "type": "string",
            "context": [
              "edit"
            ],
            "required": true
          },
          "name": {
            "description": "Display name for the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "first_name": {
            "description": "First name for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "last_name": {
            "description": "Last name for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "email": {
            "description": "The email address for the user.",
            "type": "string",
            "format": "email",
            "context": [
              "edit"
            ],
            "required": true
          },
          "url": {
            "description": "URL of the user.",
            "type": "string",
            "format": "uri",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "description": {
            "description": "Description of the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "Author URL of the user.",
            "type": "string",
            "format": "uri",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true
          },
          "locale": {
            "description": "Locale for the user.",
            "type": "string",
            "enum": [
              "",
              "en_US"
            ],
            "context": [
              "edit"
            ]
          },
          "nickname": {
            "description": "The nickname for the user.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "slug": {
            "description": "An alphanumeric identifier for the user.",
            "type": "string",
            "context": [
              "embed",
              "view",
              "edit"
            ]
          },
          "registered_date": {
            "description": "Registration date for the user.",
            "type": "string",
            "format": "date-time",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "roles": {
            "description": "Roles assigned to the user.",
            "type": "array",
            "items": {
              "type": "string"
            },
            "context": [
              "edit"
            ]
          },
          "password": {
            "description": "Password for the user (never included).",
            "type": "string",
            "context": [],
            "required": true
          },
          "capabilities": {
            "description": "All capabilities assigned to the user.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "extra_capabilities": {
            "description": "Any extra capabilities assigned to the user.",
            "type": "object",
            "context": [
              "edit"
            ],
            "readonly": true
          },
          "avatar_urls": {
            "description": "Avatar URLs for the user.",
            "type": "object",
            "context": [
              "embed",
              "view",
              "edit"
            ],
            "readonly": true,
            "properties": {
              "24": {
                "description": "Avatar URL with image size of 24 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "48": {
                "description": "Avatar URL with image size of 48 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "96": {
                "description": "Avatar URL with image size of 96 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              }
            }
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/users/me"
      }
    },
    "/wp/v2/comments": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "page": {
              "required": false,
              "default": 1,
              "description": "Current page of the collection.",
              "type": "integer"
            },
            "per_page": {
              "required": false,
              "default": 10,
              "description": "Maximum number of items to be returned in result set.",
              "type": "integer"
            },
            "search": {
              "required": false,
              "description": "Limit results to those matching a string.",
              "type": "string"
            },
            "after": {
              "required": false,
              "description": "Limit response to comments published after a given ISO8601 compliant date.",
              "type": "string"
            },
            "author": {
              "required": false,
              "description": "Limit result set to comments assigned to specific user IDs. Requires authorization.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "author_exclude": {
              "required": false,
              "description": "Ensure result set excludes comments assigned to specific user IDs. Requires authorization.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "author_email": {
              "required": false,
              "description": "Limit result set to that from a specific author email. Requires authorization.",
              "type": "string"
            },
            "before": {
              "required": false,
              "description": "Limit response to comments published before a given ISO8601 compliant date.",
              "type": "string"
            },
            "exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "include": {
              "required": false,
              "default": [],
              "description": "Limit result set to specific IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "offset": {
              "required": false,
              "description": "Offset the result set by a specific number of items.",
              "type": "integer"
            },
            "order": {
              "required": false,
              "default": "desc",
              "enum": [
                "asc",
                "desc"
              ],
              "description": "Order sort attribute ascending or descending.",
              "type": "string"
            },
            "orderby": {
              "required": false,
              "default": "date_gmt",
              "enum": [
                "date",
                "date_gmt",
                "id",
                "include",
                "post",
                "parent",
                "type"
              ],
              "description": "Sort collection by object attribute.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "default": [],
              "description": "Limit result set to comments of specific parent IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "parent_exclude": {
              "required": false,
              "default": [],
              "description": "Ensure result set excludes specific parent IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "post": {
              "required": false,
              "default": [],
              "description": "Limit result set to comments assigned to specific post IDs.",
              "type": "array",
              "items": {
                "type": "integer"
              }
            },
            "status": {
              "required": false,
              "default": "approve",
              "description": "Limit result set to comments assigned a specific status. Requires authorization.",
              "type": "string"
            },
            "type": {
              "required": false,
              "default": "comment",
              "description": "Limit result set to comments assigned a specific type. Requires authorization.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "The password for the post if it is password protected.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST"
          ],
          "args": {
            "author": {
              "required": false,
              "description": "The ID of the user object, if author was a user.",
              "type": "integer"
            },
            "author_email": {
              "required": false,
              "description": "Email address for the object author.",
              "type": "string"
            },
            "author_ip": {
              "required": false,
              "description": "IP address for the object author.",
              "type": "string"
            },
            "author_name": {
              "required": false,
              "description": "Display name for the object author.",
              "type": "string"
            },
            "author_url": {
              "required": false,
              "description": "URL for the object author.",
              "type": "string"
            },
            "author_user_agent": {
              "required": false,
              "description": "User agent for the object author.",
              "type": "string"
            },
            "content": {
              "required": false,
              "description": "The content for the object.",
              "type": "object"
            },
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "default": 0,
              "description": "The ID for the parent of the object.",
              "type": "integer"
            },
            "post": {
              "required": false,
              "default": 0,
              "description": "The ID of the associated post object.",
              "type": "integer"
            },
            "status": {
              "required": false,
              "description": "State of the object.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "comment",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "author": {
            "description": "The ID of the user object, if author was a user.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "author_email": {
            "description": "Email address for the object author.",
            "type": "string",
            "format": "email",
            "context": [
              "edit"
            ]
          },
          "author_ip": {
            "description": "IP address for the object author.",
            "type": "string",
            "format": "ip",
            "context": [
              "edit"
            ]
          },
          "author_name": {
            "description": "Display name for the object author.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "author_url": {
            "description": "URL for the object author.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "author_user_agent": {
            "description": "User agent for the object author.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "default": 0
          },
          "post": {
            "description": "The ID of the associated post object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ],
            "default": 0
          },
          "status": {
            "description": "State of the object.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ]
          },
          "type": {
            "description": "Type of Comment for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "author_avatar_urls": {
            "description": "Avatar URLs for the object author.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true,
            "properties": {
              "24": {
                "description": "Avatar URL with image size of 24 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "48": {
                "description": "Avatar URL with image size of 48 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "96": {
                "description": "Avatar URL with image size of 96 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              }
            }
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/comments"
      }
    },
    "/wp/v2/comments/(?P<id>[\\d]+)": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": {
            "context": {
              "required": false,
              "default": "view",
              "enum": [
                "view",
                "embed",
                "edit"
              ],
              "description": "Scope under which the request is made; determines fields present in response.",
              "type": "string"
            },
            "password": {
              "required": false,
              "description": "The password for the post if it is password protected.",
              "type": "string"
            }
          }
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "author": {
              "required": false,
              "description": "The ID of the user object, if author was a user.",
              "type": "integer"
            },
            "author_email": {
              "required": false,
              "description": "Email address for the object author.",
              "type": "string"
            },
            "author_ip": {
              "required": false,
              "description": "IP address for the object author.",
              "type": "string"
            },
            "author_name": {
              "required": false,
              "description": "Display name for the object author.",
              "type": "string"
            },
            "author_url": {
              "required": false,
              "description": "URL for the object author.",
              "type": "string"
            },
            "author_user_agent": {
              "required": false,
              "description": "User agent for the object author.",
              "type": "string"
            },
            "content": {
              "required": false,
              "description": "The content for the object.",
              "type": "object"
            },
            "date": {
              "required": false,
              "description": "The date the object was published, in the site's timezone.",
              "type": "string"
            },
            "date_gmt": {
              "required": false,
              "description": "The date the object was published, as GMT.",
              "type": "string"
            },
            "parent": {
              "required": false,
              "description": "The ID for the parent of the object.",
              "type": "integer"
            },
            "post": {
              "required": false,
              "description": "The ID of the associated post object.",
              "type": "integer"
            },
            "status": {
              "required": false,
              "description": "State of the object.",
              "type": "string"
            },
            "meta": {
              "required": false,
              "description": "Meta fields.",
              "type": "object"
            }
          }
        },
        {
          "methods": [
            "DELETE"
          ],
          "args": {
            "force": {
              "required": false,
              "default": false,
              "description": "Whether to bypass trash and force deletion.",
              "type": "boolean"
            },
            "password": {
              "required": false,
              "description": "The password for the post if it is password protected.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "comment",
        "type": "object",
        "properties": {
          "id": {
            "description": "Unique identifier for the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "author": {
            "description": "The ID of the user object, if author was a user.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "author_email": {
            "description": "Email address for the object author.",
            "type": "string",
            "format": "email",
            "context": [
              "edit"
            ]
          },
          "author_ip": {
            "description": "IP address for the object author.",
            "type": "string",
            "format": "ip",
            "context": [
              "edit"
            ]
          },
          "author_name": {
            "description": "Display name for the object author.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "author_url": {
            "description": "URL for the object author.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "author_user_agent": {
            "description": "User agent for the object author.",
            "type": "string",
            "context": [
              "edit"
            ]
          },
          "content": {
            "description": "The content for the object.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "properties": {
              "raw": {
                "description": "Content for the object, as it exists in the database.",
                "type": "string",
                "context": [
                  "edit"
                ]
              },
              "rendered": {
                "description": "HTML content for the object, transformed for display.",
                "type": "string",
                "context": [
                  "view",
                  "edit",
                  "embed"
                ],
                "readonly": true
              }
            }
          },
          "date": {
            "description": "The date the object was published, in the site's timezone.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit",
              "embed"
            ]
          },
          "date_gmt": {
            "description": "The date the object was published, as GMT.",
            "type": "string",
            "format": "date-time",
            "context": [
              "view",
              "edit"
            ]
          },
          "link": {
            "description": "URL to the object.",
            "type": "string",
            "format": "uri",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "parent": {
            "description": "The ID for the parent of the object.",
            "type": "integer",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "default": 0
          },
          "post": {
            "description": "The ID of the associated post object.",
            "type": "integer",
            "context": [
              "view",
              "edit"
            ],
            "default": 0
          },
          "status": {
            "description": "State of the object.",
            "type": "string",
            "context": [
              "view",
              "edit"
            ]
          },
          "type": {
            "description": "Type of Comment for the object.",
            "type": "string",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true
          },
          "author_avatar_urls": {
            "description": "Avatar URLs for the object author.",
            "type": "object",
            "context": [
              "view",
              "edit",
              "embed"
            ],
            "readonly": true,
            "properties": {
              "24": {
                "description": "Avatar URL with image size of 24 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "48": {
                "description": "Avatar URL with image size of 48 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              },
              "96": {
                "description": "Avatar URL with image size of 96 pixels.",
                "type": "string",
                "format": "uri",
                "context": [
                  "embed",
                  "view",
                  "edit"
                ]
              }
            }
          },
          "meta": {
            "description": "Meta fields.",
            "type": "object",
            "context": [
              "view",
              "edit"
            ],
            "properties": []
          }
        }
      }
    },
    "/wp/v2/settings": {
      "namespace": "wp/v2",
      "methods": [
        "GET",
        "POST",
        "PUT",
        "PATCH"
      ],
      "endpoints": [
        {
          "methods": [
            "GET"
          ],
          "args": []
        },
        {
          "methods": [
            "POST",
            "PUT",
            "PATCH"
          ],
          "args": {
            "title": {
              "required": false,
              "description": "Site title.",
              "type": "string"
            },
            "description": {
              "required": false,
              "description": "Site tagline.",
              "type": "string"
            },
            "url": {
              "required": false,
              "description": "Site URL.",
              "type": "string"
            },
            "email": {
              "required": false,
              "description": "This address is used for admin purposes, like new user notification.",
              "type": "string"
            },
            "timezone": {
              "required": false,
              "description": "A city in the same timezone as you.",
              "type": "string"
            },
            "date_format": {
              "required": false,
              "description": "A date format for all date strings.",
              "type": "string"
            },
            "time_format": {
              "required": false,
              "description": "A time format for all time strings.",
              "type": "string"
            },
            "start_of_week": {
              "required": false,
              "description": "A day number of the week that the week should start on.",
              "type": "integer"
            },
            "language": {
              "required": false,
              "description": "WordPress locale code.",
              "type": "string"
            },
            "use_smilies": {
              "required": false,
              "description": "Convert emoticons like :-) and :-P to graphics on display.",
              "type": "boolean"
            },
            "default_category": {
              "required": false,
              "description": "Default post category.",
              "type": "integer"
            },
            "default_post_format": {
              "required": false,
              "description": "Default post format.",
              "type": "string"
            },
            "posts_per_page": {
              "required": false,
              "description": "Blog pages show at most.",
              "type": "integer"
            },
            "default_ping_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
              "type": "string"
            },
            "default_comment_status": {
              "required": false,
              "enum": [
                "open",
                "closed"
              ],
              "description": "Allow people to post comments on new articles.",
              "type": "string"
            }
          }
        }
      ],
      "schema": {
        "$schema": "http://json-schema.org/schema#",
        "title": "settings",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "description": "Site title.",
            "default": null
          },
          "description": {
            "type": "string",
            "description": "Site tagline.",
            "default": null
          },
          "url": {
            "type": "string",
            "description": "Site URL.",
            "default": null,
            "format": "uri"
          },
          "email": {
            "type": "string",
            "description": "This address is used for admin purposes, like new user notification.",
            "default": null,
            "format": "email"
          },
          "timezone": {
            "type": "string",
            "description": "A city in the same timezone as you.",
            "default": null
          },
          "date_format": {
            "type": "string",
            "description": "A date format for all date strings.",
            "default": null
          },
          "time_format": {
            "type": "string",
            "description": "A time format for all time strings.",
            "default": null
          },
          "start_of_week": {
            "type": "integer",
            "description": "A day number of the week that the week should start on.",
            "default": null
          },
          "language": {
            "type": "string",
            "description": "WordPress locale code.",
            "default": "en_US"
          },
          "use_smilies": {
            "type": "boolean",
            "description": "Convert emoticons like :-) and :-P to graphics on display.",
            "default": true
          },
          "default_category": {
            "type": "integer",
            "description": "Default post category.",
            "default": null
          },
          "default_post_format": {
            "type": "string",
            "description": "Default post format.",
            "default": null
          },
          "posts_per_page": {
            "type": "integer",
            "description": "Blog pages show at most.",
            "default": 10
          },
          "default_ping_status": {
            "type": "string",
            "description": "Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.",
            "default": null,
            "enum": [
              "open",
              "closed"
            ]
          },
          "default_comment_status": {
            "type": "string",
            "description": "Allow people to post comments on new articles.",
            "default": null,
            "enum": [
              "open",
              "closed"
            ]
          }
        }
      },
      "_links": {
        "self": "http://local.graphql.dev/wp-json/wp/v2/settings"
      }
    }
  },
  "_links": {
    "help": [
      {
        "href": "http://v2.wp-api.org/"
      }
    ]
  }
}

export default sampleReference
