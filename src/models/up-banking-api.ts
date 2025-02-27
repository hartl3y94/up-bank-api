/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/accounts": {
    /**
     * Retrieve a paginated list of all accounts for the currently
     * authenticated user. The returned list is paginated and can be scrolled
     * by following the `prev` and `next` links where present.
     */
    get: {
      parameters: {
        query: {
          /** The number of records to return in each page. */
          "page[size]"?: number;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["ListAccountsResponse"];
          };
        };
      };
    };
  };
  "/accounts/{id}": {
    /** Retrieve a specific account by providing its unique identifier. */
    get: {
      parameters: {
        path: {
          /** The unique identifier for the account. */
          id: string;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["GetAccountResponse"];
          };
        };
      };
    };
  };
  "/categories": {
    /**
     * Retrieve a list of all categories and their ancestry. The returned list
     * is not paginated.
     */
    get: {
      parameters: {
        query: {
          /**
           * The unique identifier of a parent category for which to
           * return only its children. Providing an invalid category
           * identifier results in a `404` response.
           */
          "filter[parent]"?: string;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["ListCategoriesResponse"];
          };
        };
      };
    };
  };
  "/categories/{id}": {
    /** Retrieve a specific category by providing its unique identifier. */
    get: {
      parameters: {
        path: {
          /** The unique identifier for the category. */
          id: string;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["GetCategoryResponse"];
          };
        };
      };
    };
  };
  "/util/ping": {
    /**
     * Make a basic ping request to the API. This is useful to verify that
     * authentication is functioning correctly. On authentication success an
     * HTTP `200` status is returned. On failure an HTTP `401` error response
     * is returned.
     */
    get: {
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["PingResponse"];
          };
        };
        /** Not Authorized */
        401: {
          content: {
            "application/json": components["schemas"]["ErrorResponse"];
          };
        };
      };
    };
  };
  "/tags": {
    /**
     * Retrieve a list of all tags currently in use. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered lexicographically.
     * The `transactions` relationship for each tag exposes a link
     * to get the transactions with the given tag.
     */
    get: {
      parameters: {
        query: {
          /** The number of records to return in each page. */
          "page[size]"?: number;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["ListTagsResponse"];
          };
        };
      };
    };
  };
  "/transactions/{transactionId}/relationships/tags": {
    /**
     * Associates one or more tags with a specific transaction. No more than 6
     * tags may be present on any single transaction. Duplicate tags are
     * silently ignored. An HTTP `204` is returned on success. The associated
     * tags, along with this request URL, are also exposed via the `tags`
     * relationship on the transaction resource returned from
     * `/transactions/{id}`.
     */
    post: {
      parameters: {
        path: {
          /** The unique identifier for the transaction. */
          transactionId: string;
        };
      };
      responses: {
        /** Successful Response */
        204: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["UpdateTransactionTagsRequest"];
        };
      };
    };
    /**
     * Disassociates one or more tags from a specific transaction. Tags that are
     * not associated are silently ignored. An HTTP `204` is returned on
     * success. The associated tags, along with this request URL, are also
     * exposed via the `tags` relationship on the transaction resource returned
     * from `/transactions/{id}`.
     */
    delete: {
      parameters: {
        path: {
          /** The unique identifier for the transaction. */
          transactionId: string;
        };
      };
      responses: {
        /** Successful Response */
        204: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["UpdateTransactionTagsRequest"];
        };
      };
    };
  };
  "/transactions": {
    /**
     * Retrieve a list of all transactions across all accounts for the currently
     * authenticated user. The returned list is [paginated](#pagination) and can
     * be scrolled by following the `next` and `prev` links where present. To
     * narrow the results to a specific date range pass one or both of
     * `filter[since]` and `filter[until]` in the query string. These filter
     * parameters **should not** be used for pagination. Results are ordered
     * newest first to oldest last.
     */
    get: {
      parameters: {
        query: {
          /** The number of records to return in each page. */
          "page[size]"?: number;
          /**
           * The transaction status for which to return records. This
           * can be used to filter `HELD` transactions from those
           * that are `SETTLED`.
           */
          "filter[status]"?: components["schemas"]["TransactionStatusEnum"];
          /**
           * The start date-time from which to return records,
           * formatted according to rfc-3339. Not to be used for
           * pagination purposes.
           */
          "filter[since]"?: string;
          /**
           * The end date-time up to which to return records,
           * formatted according to rfc-3339. Not to be used for
           * pagination purposes.
           */
          "filter[until]"?: string;
          /**
           * The category identifier for which to filter transactions.
           * Both parent and child categories can be filtered through
           * this parameter. Providing an invalid category identifier
           * results in a `404` response.
           */
          "filter[category]"?: string;
          /**
           * A transaction tag to filter for which to return records.
           * If the tag does not exist, zero records are returned and
           * a success response is given.
           */
          "filter[tag]"?: string;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["ListTransactionsResponse"];
          };
        };
      };
    };
  };
  "/transactions/{id}": {
    /** Retrieve a specific transaction by providing its unique identifier. */
    get: {
      parameters: {
        path: {
          /** The unique identifier for the transaction. */
          id: string;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["GetTransactionResponse"];
          };
        };
      };
    };
  };
  "/accounts/{accountId}/transactions": {
    /**
     * Retrieve a list of all transactions for a specific account. The returned
     * list is [paginated](#pagination) and can be scrolled by following the
     * `next` and `prev` links where present. To narrow the results to a
     * specific date range pass one or both of `filter[since]` and
     * `filter[until]` in the query string. These filter parameters
     * **should not** be used for pagination. Results are ordered newest first
     * to oldest last.
     */
    get: {
      parameters: {
        path: {
          /** The unique identifier for the account. */
          accountId: string;
        };
        query: {
          /** The number of records to return in each page. */
          "page[size]"?: number;
          /**
           * The transaction status for which to return records. This
           * can be used to filter `HELD` transactions from those
           * that are `SETTLED`.
           */
          "filter[status]"?: components["schemas"]["TransactionStatusEnum"];
          /**
           * The start date-time from which to return records,
           * formatted according to rfc-3339. Not to be used for
           * pagination purposes.
           */
          "filter[since]"?: string;
          /**
           * The end date-time up to which to return records,
           * formatted according to rfc-3339. Not to be used for
           * pagination purposes.
           */
          "filter[until]"?: string;
          /**
           * The category identifier for which to filter transactions.
           * Both parent and child categories can be filtered through
           * this parameter. Providing an invalid category identifier
           * results in a `404` response.
           */
          "filter[category]"?: string;
          /**
           * A transaction tag to filter for which to return records.
           * If the tag does not exist, zero records are returned and
           * a success response is given.
           */
          "filter[tag]"?: string;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["ListTransactionsResponse"];
          };
        };
      };
    };
  };
  "/webhooks": {
    /**
     * Retrieve a list of configured webhooks. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered oldest first to
     * newest last.
     */
    get: {
      parameters: {
        query: {
          /** The number of records to return in each page. */
          "page[size]"?: number;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["ListWebhooksResponse"];
          };
        };
      };
    };
    /**
     * Create a new webhook with a given URL. The URL will receive webhook
     * events as JSON-encoded `POST` requests. The URL must respond with a HTTP
     * `200` status on success.
     *
     * There is currently a limit of 10 webhooks at any given time. Once this
     * limit is reached, existing webhooks will need to be deleted before new
     * webhooks can be created.
     *
     * Event delivery is retried with exponential backoff if the URL is
     * unreachable or it does not respond with a `200` status. The response
     * includes a `secretKey` attribute, which is used to sign requests sent to
     * the webhook URL. It will not be returned from any other endpoints within
     * the Up API. If the `secretKey` is lost, simply create a new webhook with
     * the same URL, capture its `secretKey` and then delete the original
     * webhook. See [Handling webhook events](#callback_post_webhookURL) for
     * details on how to process webhook events.
     *
     * It is probably a good idea to test the webhook by
     * [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating
     * it.
     */
    post: {
      responses: {
        /** Created */
        201: {
          content: {
            "application/json": components["schemas"]["CreateWebhookResponse"];
          };
        };
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["CreateWebhookRequest"];
        };
      };
    };
  };
  "/webhooks/{id}": {
    /** Retrieve a specific webhook by providing its unique identifier. */
    get: {
      parameters: {
        path: {
          /** The unique identifier for the webhook. */
          id: string;
        };
      };
      responses: {
        /** Successful Response */
        200: {
          content: {
            "application/json": components["schemas"]["GetWebhookResponse"];
          };
        };
      };
    };
    /**
     * Delete a specific webhook by providing its unique identifier. Once
     * deleted, webhook events will no longer be sent to the configured URL.
     */
    delete: {
      parameters: {
        path: {
          /** The unique identifier for the webhook. */
          id: string;
        };
      };
      responses: {
        /** Deleted */
        204: never;
      };
    };
  };
  "/webhooks/{webhookId}/ping": {
    /**
     * Send a `PING` event to a webhook by providing its unique identifier.
     * This is useful for testing and debugging purposes. The event is delivered
     * asynchronously and its data is returned in the response to this request.
     */
    post: {
      parameters: {
        path: {
          /** The unique identifier for the webhook. */
          webhookId: string;
        };
      };
      responses: {
        /** Successful response */
        201: {
          content: {
            "application/json": components["schemas"]["WebhookEventCallback"];
          };
        };
      };
    };
  };
  "/webhooks/{webhookId}/logs": {
    /**
     * Retrieve a list of delivery logs for a webhook by providing its unique
     * identifier. This is useful for analysis and debugging purposes. The
     * returned list is [paginated](#pagination) and can be scrolled by
     * following the `next` and `prev` links where present. Results are ordered
     * newest first to oldest last. Logs may be automatically purged after a
     * period of time.
     */
    get: {
      parameters: {
        path: {
          /** The unique identifier for the webhook. */
          webhookId: string;
        };
        query: {
          /** The number of records to return in each page. */
          "page[size]"?: number;
        };
      };
      responses: {
        /** Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["ListWebhookDeliveryLogsResponse"];
          };
        };
      };
    };
  };
}

export interface components {
  schemas: {
    /**
     * Specifies the type of bank account. Currently returned values are `SAVER`
     * and `TRANSACTIONAL`.
     */
    AccountTypeEnum: "SAVER" | "TRANSACTIONAL";
    /** Provides information about a value of money. */
    MoneyObject: {
      /** The ISO 4217 currency code. */
      currencyCode: string;
      /**
       * The amount of money, formatted as a string in the relevant currency.
       * For example, for an Australian dollar value of $10.56, this field will
       * be `"10.56"`. The currency symbol is not included in the string.
       */
      value: string;
      /**
       * The amount of money in the smallest denomination for the currency, as a
       * 64-bit integer.  For example, for an Australian dollar value of $10.56,
       * this field will be `1056`.
       */
      valueInBaseUnits: number;
    };
    /** Provides information about an Up bank account. */
    AccountResource: {
      /** The type of this resource: `accounts` */
      type: string;
      /** The unique identifier for this account. */
      id: string;
      attributes: {
        /** The name associated with the account in the Up application. */
        displayName: string;
        /** The bank account type of this account. */
        accountType: components["schemas"]["AccountTypeEnum"];
        /**
         * The available balance of the account, taking into account any amounts
         * that are currently on hold.
         */
        balance: components["schemas"]["MoneyObject"];
        /** The date-time at which this account was first opened. */
        createdAt: string;
      };
      relationships: {
        transactions: {
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
      };
      links?: {
        /** The canonical link to this resource within the API. */
        self: string;
      };
    };
    /**
     * Successful response to get all accounts. This returns a paginated list of
     * accounts, which can be scrolled by following the `prev` and `next` links
     * if present.
     */
    ListAccountsResponse: {
      /** The list of accounts returned in this response. */
      data: components["schemas"]["AccountResource"][];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         */
        next: string | null;
      };
    };
    /** Successful response to get a single account. */
    GetAccountResponse: {
      /** The account returned in this response. */
      data: components["schemas"]["AccountResource"];
    };
    /** Provides information about a category and its ancestry. */
    CategoryResource: {
      /** The type of this resource: `categories` */
      type: string;
      /**
       * The unique identifier for this category. This is a human-readable but
       * URL-safe value.
       */
      id: string;
      attributes: {
        /** The name of this category as seen in the Up application. */
        name: string;
      };
      relationships: {
        parent: {
          data: {
            /** The type of this resource: `categories` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          } | null;
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
        children: {
          data: {
            /** The type of this resource: `categories` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          }[];
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
      };
      links?: {
        /** The canonical link to this resource within the API. */
        self: string;
      };
    };
    /**
     * Successful response to get all categories and their ancestry. The
     * returned list is not paginated.
     */
    ListCategoriesResponse: {
      /** The list of categories returned in this response. */
      data: components["schemas"]["CategoryResource"][];
    };
    /** Successful response to get a single category and its ancestry. */
    GetCategoryResponse: {
      /** The category returned in this response. */
      data: components["schemas"]["CategoryResource"];
    };
    /** Basic ping response to verify authentication. */
    PingResponse: {
      meta: {
        /** The unique identifier of the authenticated customer. */
        id: string;
        /** A cute emoji that represents the response status. */
        statusEmoji: string;
      };
    };
    /** Provides information about an error processing a request. */
    ErrorObject: {
      /**
       * The HTTP status code associated with this error. This can also be
       * obtained from the response headers. The status indicates the broad type
       * of error according to HTTP semantics.
       */
      status: string;
      /**
       * A short description of this error. This should be stable across
       * multiple occurrences of this type of error and typically expands on the
       * reason for the status code.
       */
      title: string;
      /**
       * A detailed description of this error. This should be considered unique
       * to individual occurrences of an error and subject to change. It is
       * useful for debugging purposes.
       */
      detail: string;
      /**
       * If applicable, location in the request that this error relates to. This
       * may be a parameter in the query string, or a an attribute in the
       * request body.
       */
      source?: {
        /**
         * If this error relates to a query parameter, the name of the
         * parameter.
         */
        parameter?: string;
        /**
         * If this error relates to an attribute in the request body, a
         * rfc-6901 JSON pointer to the attribute.
         */
        pointer?: string;
      };
    };
    /** Generic error response that returns one or more errors. */
    ErrorResponse: {
      /** The list of errors returned in this response. */
      errors: components["schemas"]["ErrorObject"][];
    };
    /** Provides information about a tag. */
    TagResource: {
      /** The type of this resource: `tags` */
      type: string;
      /** The label of the tag, which also acts as the tag’s unique identifier. */
      id: string;
      relationships: {
        transactions: {
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
      };
    };
    /**
     * Successful response to get all tags. This returns a paginated list of
     * tags, which can be scrolled by following the `prev` and `next` links if
     * present.
     */
    ListTagsResponse: {
      /** The list of tags returned in this response. */
      data: components["schemas"]["TagResource"][];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         */
        next: string | null;
      };
    };
    /** Uniquely identifies a single tag in the API. */
    TagInputResourceIdentifier: {
      /** The type of this resource: `tags` */
      type: string;
      /** The label of the tag, which also acts as the tag’s unique identifier. */
      id: string;
    };
    /** Request to add or remove tags associated with a transaction. */
    UpdateTransactionTagsRequest: {
      /** The tags to add to or remove from the transaction. */
      data: components["schemas"]["TagInputResourceIdentifier"][];
    };
    /**
     * Specifies which stage of processing a transaction is currently at.
     * Currently returned values are `HELD` and `SETTLED`. When a transaction is
     * held, its account’s `availableBalance` is affected. When a transaction is
     * settled, its account’s `currentBalance` is affected.
     */
    TransactionStatusEnum: "HELD" | "SETTLED";
    /**
     * Provides information about the amount at which a transaction was in the
     * `HELD` status.
     */
    HoldInfoObject: {
      /**
       * The amount of this transaction while in the `HELD` status, in
       * Australian dollars.
       */
      amount: components["schemas"]["MoneyObject"];
      /**
       * The foreign currency amount of this transaction while in the `HELD`
       * status. This field will be `null` for domestic transactions. The amount
       * was converted to the AUD amount reflected in the `amount` field.
       */
      foreignAmount: components["schemas"]["MoneyObject"] | null;
    };
    /**
     * Provides information about how a Round Up was applied, such as whether or
     * not a boost was included in the Round Up.
     */
    RoundUpObject: {
      /**
       * The total amount of this Round Up, including any boosts, represented as
       * a negative value.
       */
      amount: components["schemas"]["MoneyObject"];
      /**
       * The portion of the Round Up `amount` owing to boosted Round Ups,
       * represented as a negative value. If no boost was added to the Round Up
       * this field will be `null`.
       */
      boostPortion: components["schemas"]["MoneyObject"] | null;
    };
    /**
     * Provides information about an instant reimbursement in the form of
     * cashback.
     */
    CashbackObject: {
      /** A brief description of why this cashback was paid. */
      description: string;
      /** The total amount of cashback paid, represented as a positive value. */
      amount: components["schemas"]["MoneyObject"];
    };
    TransactionResource: {
      /** The type of this resource: `transactions` */
      type: string;
      /** The unique identifier for this transaction. */
      id: string;
      attributes: {
        /**
         * The current processing status of this transaction, according to
         * whether or not this transaction has settled or is still held.
         */
        status: components["schemas"]["TransactionStatusEnum"];
        /**
         * The original, unprocessed text of the transaction. This is often not
         * a perfect indicator of the actual merchant, but it is useful for
         * reconciliation purposes in some cases.
         */
        rawText: string | null;
        /**
         * A short description for this transaction. Usually the merchant name
         * for purchases.
         */
        description: string;
        /**
         * Attached message for this transaction, such as a payment message, or a
         * transfer note.
         */
        message: string | null;
        /**
         * If this transaction is currently in the `HELD` status, or was ever in
         * the `HELD` status, the `amount` and `foreignAmount` of the
         * transaction while `HELD`.
         */
        holdInfo: components["schemas"]["HoldInfoObject"] | null;
        /**
         * Details of how this transaction was rounded-up. If no Round Up was
         * applied this field will be `null`.
         */
        roundUp: components["schemas"]["RoundUpObject"] | null;
        /**
         * If all or part of this transaction was instantly reimbursed in the
         * form of cashback, details of the reimbursement.
         */
        cashback: components["schemas"]["CashbackObject"] | null;
        /**
         * The amount of this transaction in Australian dollars. For
         * transactions that were once `HELD` but are now `SETTLED`, refer to
         * the `holdInfo` field for the original `amount` the transaction was
         * `HELD` at.
         */
        amount: components["schemas"]["MoneyObject"];
        /**
         * The foreign currency amount of this transaction. This field will be
         * `null` for domestic transactions. The amount was converted to the AUD
         * amount reflected in the `amount` of this transaction. Refer to the
         * `holdInfo` field for the original `foreignAmount` the transaction was
         * `HELD` at.
         */
        foreignAmount: components["schemas"]["MoneyObject"] | null;
        /**
         * The date-time at which this transaction settled. This field will be
         * `null` for transactions that are currently in the `HELD` status.
         */
        settledAt: string | null;
        /** The date-time at which this transaction was first encountered. */
        createdAt: string;
      };
      relationships: {
        account: {
          data: {
            /** The type of this resource: `accounts` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          };
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
        category: {
          data: {
            /** The type of this resource: `categories` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          } | null;
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
        parentCategory: {
          data: {
            /** The type of this resource: `categories` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          } | null;
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
        tags: {
          data: {
            /** The type of this resource: `tags` */
            type: string;
            /** The label of the tag, which also acts as the tag’s unique identifier. */
            id: string;
          }[];
          links?: {
            /**
             * The link to retrieve or modify linkage between this resources and the
             * related resource(s) in this relationship.
             */
            self: string;
          };
        };
      };
      links?: {
        /** The canonical link to this resource within the API. */
        self: string;
      };
    };
    /**
     * Successful response to get all transactions. This returns a paginated
     * list of transactions, which can be scrolled by following the `prev` and
     * `next` links if present.
     */
    ListTransactionsResponse: {
      /** The list of transactions returned in this response. */
      data: components["schemas"]["TransactionResource"][];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         */
        next: string | null;
      };
    };
    /** Successful response to get a single transaction. */
    GetTransactionResponse: {
      /** The transaction returned in this response. */
      data: components["schemas"]["TransactionResource"];
    };
    /** Provides information about a webhook. */
    WebhookResource: {
      /** The type of this resource: `webhooks` */
      type: string;
      /** The unique identifier for this webhook. */
      id: string;
      attributes: {
        /** The URL that this webhook is configured to `POST` events to. */
        url: string;
        /**
         * An optional description that was provided at the time the webhook was
         * created.
         */
        description: string | null;
        /**
         * A shared secret key used to sign all webhook events sent to the
         * configured webhook URL. This field is returned only once, upon the
         * initial creation of the webhook. If lost, create a new webhook and
         * delete this webhook.
         *
         * The webhook URL receives a request with a
         * `X-Up-Authenticity-Signature` header, which is the SHA-256 HMAC of
         * the entire raw request body signed using this `secretKey`. It is
         * advised to compute and check this signature to verify the
         * authenticity of requests sent to the webhook URL. See
         * [Handling webhook events](#callback_post_webhookURL) for full
         * details.
         */
        secretKey?: string;
        /** The date-time at which this webhook was created. */
        createdAt: string;
      };
      relationships: {
        logs: {
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
      };
      links?: {
        /** The canonical link to this resource within the API. */
        self: string;
      };
    };
    /**
     * Successful response to get all webhooks. This returns a paginated list of
     * webhooks, which can be scrolled by following the `prev` and `next` links
     * if present.
     */
    ListWebhooksResponse: {
      /** The list of webhooks returned in this response. */
      data: components["schemas"]["WebhookResource"][];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         */
        next: string | null;
      };
    };
    /** Represents a webhook specified as request input. */
    WebhookInputResource: {
      attributes: {
        /**
         * The URL that this webhook should post events to. This must be a valid
         * HTTP or HTTPS URL that does not exceed 300 characters in length.
         */
        url: string;
        /**
         * An optional description for this webhook, up to 64 characters in
         * length.
         */
        description?: string | null;
      };
    };
    /**
     * Request to create a new webhook. This currently only requires a `url`
     * attribute.
     */
    CreateWebhookRequest: {
      /** The webhook resource to create. */
      data: components["schemas"]["WebhookInputResource"];
    };
    /** Successful response after creating a webhook. */
    CreateWebhookResponse: {
      /** The webhook that was created. */
      data: components["schemas"]["WebhookResource"];
    };
    /**
     * Specifies the type of a webhook event. This can be used to determine what
     * action to take in response to the event, such as which relationships to
     * expect.
     */
    WebhookEventTypeEnum:
      | "TRANSACTION_CREATED"
      | "TRANSACTION_SETTLED"
      | "TRANSACTION_DELETED"
      | "PING";
    /**
     * Provides the event data used in asynchronous webhook event callbacks to
     * subscribed endpoints. Webhooks events have defined `eventType`s and may
     * optionally relate to other resources within the Up API.
     */
    WebhookEventResource: {
      /** The type of this resource: `webhook-events` */
      type: string;
      /**
       * The unique identifier for this event. This will remain constant across
       * delivery retries.
       */
      id: string;
      attributes: {
        /**
         * The type of this event. This can be used to determine what action to
         * take in response to the event.
         */
        eventType: components["schemas"]["WebhookEventTypeEnum"];
        /** The date-time at which this event was generated. */
        createdAt: string;
      };
      relationships: {
        webhook: {
          data: {
            /** The type of this resource: `webhooks` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          };
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
        transaction?: {
          data: {
            /** The type of this resource: `transactions` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          };
          links?: {
            /** The link to retrieve the related resource(s) in this relationship. */
            related: string;
          };
        };
      };
    };
    /** Asynchronous callback request used for webhook event delivery. */
    WebhookEventCallback: {
      /** The webhook event data sent to the subscribed webhook. */
      data: components["schemas"]["WebhookEventResource"];
    };
    /** Successful response to get a single webhook. */
    GetWebhookResponse: {
      /** The webhook returned in this response. */
      data: components["schemas"]["WebhookResource"];
    };
    /**
     * Specifies the nature of the success or failure of a webhook delivery
     * attempt to the subscribed webhook URL. The currently returned values are
     * described below:
     *
     * - **`DELIVERED`**: The event was delivered to the webhook URL
     *   successfully and a `200` response was received.
     * - **`UNDELIVERABLE`**: The webhook URL was not reachable, or timed out.
     * - **`BAD_RESPONSE_CODE`**: The event was delivered to the webhook URL
     *   but a non-`200` response was received.
     */
    WebhookDeliveryStatusEnum:
      | "DELIVERED"
      | "UNDELIVERABLE"
      | "BAD_RESPONSE_CODE";
    /**
     * Provides historical webhook event delivery information for analysis and
     * debugging purposes.
     */
    WebhookDeliveryLogResource: {
      /** The type of this resource: `webhook-delivery-logs` */
      type: string;
      /** The unique identifier for this log entry. */
      id: string;
      attributes: {
        /** Information about the request that was sent to the webhook URL. */
        request: {
          /** The payload that was sent in the request body. */
          body: string;
        };
        /** Information about the response that was received from the webhook URL. */
        response: {
          /** The HTTP status code received in the response. */
          statusCode: number;
          /** The payload that was received in the response body. */
          body: string;
        } | null;
        /** The success or failure status of this delivery attempt. */
        deliveryStatus: components["schemas"]["WebhookDeliveryStatusEnum"];
        /** The date-time at which this log entry was created. */
        createdAt: string;
      };
      relationships: {
        webhookEvent: {
          data: {
            /** The type of this resource: `webhook-events` */
            type: string;
            /** The unique identifier of the resource within its type. */
            id: string;
          };
        };
      };
    };
    /**
     * Successful response to get all delivery logs for a webhook. This returns
     * a paginated list of delivery logs, which can be scrolled by following the
     * `next` and `prev` links if present.
     */
    ListWebhookDeliveryLogsResponse: {
      /** The list of delivery logs returned in this response. */
      data: components["schemas"]["WebhookDeliveryLogResource"][];
      links: {
        /**
         * The link to the previous page in the results. If this value is `null`
         * there is no previous page.
         */
        prev: string | null;
        /**
         * The link to the next page in the results. If this value is `null`
         * there is no next page.
         */
        next: string | null;
      };
    };
  };
}

export interface operations {}
