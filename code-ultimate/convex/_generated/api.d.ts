/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.9.1.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as listMessages from "../listMessages";
import type * as sendCode from "../sendCode";
import type * as sendMessage from "../sendMessage";
import type * as translate from "../translate";
import type * as translateCode from "../translateCode";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  listMessages: typeof listMessages;
  sendCode: typeof sendCode;
  sendMessage: typeof sendMessage;
  translate: typeof translate;
  translateCode: typeof translateCode;
}>;
