
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model book
 * 
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>
/**
 * Model book_abbreviation
 * 
 */
export type book_abbreviation = $Result.DefaultSelection<Prisma.$book_abbreviationPayload>
/**
 * Model book_name
 * 
 */
export type book_name = $Result.DefaultSelection<Prisma.$book_namePayload>
/**
 * Model chapter
 * 
 */
export type chapter = $Result.DefaultSelection<Prisma.$chapterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.bookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book_abbreviation`: Exposes CRUD operations for the **book_abbreviation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_abbreviations
    * const book_abbreviations = await prisma.book_abbreviation.findMany()
    * ```
    */
  get book_abbreviation(): Prisma.book_abbreviationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book_name`: Exposes CRUD operations for the **book_name** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_names
    * const book_names = await prisma.book_name.findMany()
    * ```
    */
  get book_name(): Prisma.book_nameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.chapterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    book: 'book',
    book_abbreviation: 'book_abbreviation',
    book_name: 'book_name',
    chapter: 'chapter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "book" | "book_abbreviation" | "book_name" | "chapter"
      txIsolationLevel: never
    }
    model: {
      book: {
        payload: Prisma.$bookPayload<ExtArgs>
        fields: Prisma.bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.bookFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.bookAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.bookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      book_abbreviation: {
        payload: Prisma.$book_abbreviationPayload<ExtArgs>
        fields: Prisma.book_abbreviationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.book_abbreviationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.book_abbreviationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload>
          }
          findFirst: {
            args: Prisma.book_abbreviationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.book_abbreviationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload>
          }
          findMany: {
            args: Prisma.book_abbreviationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload>[]
          }
          create: {
            args: Prisma.book_abbreviationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload>
          }
          createMany: {
            args: Prisma.book_abbreviationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.book_abbreviationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload>
          }
          update: {
            args: Prisma.book_abbreviationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload>
          }
          deleteMany: {
            args: Prisma.book_abbreviationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.book_abbreviationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.book_abbreviationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_abbreviationPayload>
          }
          aggregate: {
            args: Prisma.Book_abbreviationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_abbreviation>
          }
          groupBy: {
            args: Prisma.book_abbreviationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_abbreviationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.book_abbreviationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.book_abbreviationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.book_abbreviationCountArgs<ExtArgs>
            result: $Utils.Optional<Book_abbreviationCountAggregateOutputType> | number
          }
        }
      }
      book_name: {
        payload: Prisma.$book_namePayload<ExtArgs>
        fields: Prisma.book_nameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.book_nameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.book_nameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload>
          }
          findFirst: {
            args: Prisma.book_nameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.book_nameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload>
          }
          findMany: {
            args: Prisma.book_nameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload>[]
          }
          create: {
            args: Prisma.book_nameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload>
          }
          createMany: {
            args: Prisma.book_nameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.book_nameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload>
          }
          update: {
            args: Prisma.book_nameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload>
          }
          deleteMany: {
            args: Prisma.book_nameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.book_nameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.book_nameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_namePayload>
          }
          aggregate: {
            args: Prisma.Book_nameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_name>
          }
          groupBy: {
            args: Prisma.book_nameGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_nameGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.book_nameFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.book_nameAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.book_nameCountArgs<ExtArgs>
            result: $Utils.Optional<Book_nameCountAggregateOutputType> | number
          }
        }
      }
      chapter: {
        payload: Prisma.$chapterPayload<ExtArgs>
        fields: Prisma.chapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          findFirst: {
            args: Prisma.chapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          findMany: {
            args: Prisma.chapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>[]
          }
          create: {
            args: Prisma.chapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          createMany: {
            args: Prisma.chapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.chapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          update: {
            args: Prisma.chapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          deleteMany: {
            args: Prisma.chapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.chapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.chapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.chapterFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.chapterAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.chapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    book?: bookOmit
    book_abbreviation?: book_abbreviationOmit
    book_name?: book_nameOmit
    chapter?: chapterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    chapter: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapter?: boolean | BookCountOutputTypeCountChapterArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountChapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    book_id: number | null
    chapter_count: number | null
    order: number | null
  }

  export type BookSumAggregateOutputType = {
    book_id: number | null
    chapter_count: number | null
    order: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    book_id: number | null
    chapter_count: number | null
    code: string | null
    order: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    book_id: number | null
    chapter_count: number | null
    code: string | null
    order: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    book_id: number
    chapter_count: number
    code: number
    order: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    book_id?: true
    chapter_count?: true
    order?: true
  }

  export type BookSumAggregateInputType = {
    book_id?: true
    chapter_count?: true
    order?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    book_id?: true
    chapter_count?: true
    code?: true
    order?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    book_id?: true
    chapter_count?: true
    code?: true
    order?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    book_id?: true
    chapter_count?: true
    code?: true
    order?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    chapter_count?: boolean
    code?: boolean
    order?: boolean
    book_name?: boolean | book$book_nameArgs<ExtArgs>
    book_abbreviation?: boolean | book$book_abbreviationArgs<ExtArgs>
    chapter?: boolean | book$chapterArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>



  export type bookSelectScalar = {
    id?: boolean
    book_id?: boolean
    chapter_count?: boolean
    code?: boolean
    order?: boolean
  }

  export type bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "chapter_count" | "code" | "order", ExtArgs["result"]["book"]>
  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_name?: boolean | book$book_nameArgs<ExtArgs>
    book_abbreviation?: boolean | book$book_abbreviationArgs<ExtArgs>
    chapter?: boolean | book$chapterArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book"
    objects: {
      book_name: Prisma.$book_namePayload<ExtArgs> | null
      book_abbreviation: Prisma.$book_abbreviationPayload<ExtArgs> | null
      chapter: Prisma.$chapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      book_id: number
      chapter_count: number
      code: string
      order: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<Prisma.$bookPayload, S>

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book'], meta: { name: 'book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookFindUniqueArgs>(args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs>(args: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookFindFirstArgs>(args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs>(args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookFindManyArgs>(args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends bookCreateArgs>(args: SelectSubset<T, bookCreateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {bookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookCreateManyArgs>(args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends bookDeleteArgs>(args: SelectSubset<T, bookDeleteArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookUpdateArgs>(args: SelectSubset<T, bookUpdateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookDeleteManyArgs>(args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookUpdateManyArgs>(args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends bookUpsertArgs>(args: SelectSubset<T, bookUpsertArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * @param {bookFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const book = await prisma.book.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: bookFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Book.
     * @param {bookAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const book = await prisma.book.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: bookAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book model
   */
  readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book_name<T extends book$book_nameArgs<ExtArgs> = {}>(args?: Subset<T, book$book_nameArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    book_abbreviation<T extends book$book_abbreviationArgs<ExtArgs> = {}>(args?: Subset<T, book$book_abbreviationArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chapter<T extends book$chapterArgs<ExtArgs> = {}>(args?: Subset<T, book$chapterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book model
   */
  interface bookFieldRefs {
    readonly id: FieldRef<"book", 'String'>
    readonly book_id: FieldRef<"book", 'Int'>
    readonly chapter_count: FieldRef<"book", 'Int'>
    readonly code: FieldRef<"book", 'String'>
    readonly order: FieldRef<"book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>
  }

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
  }

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>
  }

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * book findRaw
   */
  export type bookFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * book aggregateRaw
   */
  export type bookAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * book.book_name
   */
  export type book$book_nameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    where?: book_nameWhereInput
  }

  /**
   * book.book_abbreviation
   */
  export type book$book_abbreviationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    where?: book_abbreviationWhereInput
  }

  /**
   * book.chapter
   */
  export type book$chapterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    where?: chapterWhereInput
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    cursor?: chapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
  }


  /**
   * Model book_abbreviation
   */

  export type AggregateBook_abbreviation = {
    _count: Book_abbreviationCountAggregateOutputType | null
    _avg: Book_abbreviationAvgAggregateOutputType | null
    _sum: Book_abbreviationSumAggregateOutputType | null
    _min: Book_abbreviationMinAggregateOutputType | null
    _max: Book_abbreviationMaxAggregateOutputType | null
  }

  export type Book_abbreviationAvgAggregateOutputType = {
    book_id: number | null
  }

  export type Book_abbreviationSumAggregateOutputType = {
    book_id: number | null
  }

  export type Book_abbreviationMinAggregateOutputType = {
    id: string | null
    book_id: number | null
    value: string | null
  }

  export type Book_abbreviationMaxAggregateOutputType = {
    id: string | null
    book_id: number | null
    value: string | null
  }

  export type Book_abbreviationCountAggregateOutputType = {
    id: number
    book_id: number
    value: number
    _all: number
  }


  export type Book_abbreviationAvgAggregateInputType = {
    book_id?: true
  }

  export type Book_abbreviationSumAggregateInputType = {
    book_id?: true
  }

  export type Book_abbreviationMinAggregateInputType = {
    id?: true
    book_id?: true
    value?: true
  }

  export type Book_abbreviationMaxAggregateInputType = {
    id?: true
    book_id?: true
    value?: true
  }

  export type Book_abbreviationCountAggregateInputType = {
    id?: true
    book_id?: true
    value?: true
    _all?: true
  }

  export type Book_abbreviationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_abbreviation to aggregate.
     */
    where?: book_abbreviationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_abbreviations to fetch.
     */
    orderBy?: book_abbreviationOrderByWithRelationInput | book_abbreviationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: book_abbreviationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_abbreviations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_abbreviations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned book_abbreviations
    **/
    _count?: true | Book_abbreviationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Book_abbreviationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Book_abbreviationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_abbreviationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_abbreviationMaxAggregateInputType
  }

  export type GetBook_abbreviationAggregateType<T extends Book_abbreviationAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_abbreviation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_abbreviation[P]>
      : GetScalarType<T[P], AggregateBook_abbreviation[P]>
  }




  export type book_abbreviationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_abbreviationWhereInput
    orderBy?: book_abbreviationOrderByWithAggregationInput | book_abbreviationOrderByWithAggregationInput[]
    by: Book_abbreviationScalarFieldEnum[] | Book_abbreviationScalarFieldEnum
    having?: book_abbreviationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_abbreviationCountAggregateInputType | true
    _avg?: Book_abbreviationAvgAggregateInputType
    _sum?: Book_abbreviationSumAggregateInputType
    _min?: Book_abbreviationMinAggregateInputType
    _max?: Book_abbreviationMaxAggregateInputType
  }

  export type Book_abbreviationGroupByOutputType = {
    id: string
    book_id: number
    value: string
    _count: Book_abbreviationCountAggregateOutputType | null
    _avg: Book_abbreviationAvgAggregateOutputType | null
    _sum: Book_abbreviationSumAggregateOutputType | null
    _min: Book_abbreviationMinAggregateOutputType | null
    _max: Book_abbreviationMaxAggregateOutputType | null
  }

  type GetBook_abbreviationGroupByPayload<T extends book_abbreviationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_abbreviationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_abbreviationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_abbreviationGroupByOutputType[P]>
            : GetScalarType<T[P], Book_abbreviationGroupByOutputType[P]>
        }
      >
    >


  export type book_abbreviationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    value?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_abbreviation"]>



  export type book_abbreviationSelectScalar = {
    id?: boolean
    book_id?: boolean
    value?: boolean
  }

  export type book_abbreviationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "value", ExtArgs["result"]["book_abbreviation"]>
  export type book_abbreviationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $book_abbreviationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book_abbreviation"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      book_id: number
      value: string
    }, ExtArgs["result"]["book_abbreviation"]>
    composites: {}
  }

  type book_abbreviationGetPayload<S extends boolean | null | undefined | book_abbreviationDefaultArgs> = $Result.GetResult<Prisma.$book_abbreviationPayload, S>

  type book_abbreviationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<book_abbreviationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Book_abbreviationCountAggregateInputType | true
    }

  export interface book_abbreviationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book_abbreviation'], meta: { name: 'book_abbreviation' } }
    /**
     * Find zero or one Book_abbreviation that matches the filter.
     * @param {book_abbreviationFindUniqueArgs} args - Arguments to find a Book_abbreviation
     * @example
     * // Get one Book_abbreviation
     * const book_abbreviation = await prisma.book_abbreviation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends book_abbreviationFindUniqueArgs>(args: SelectSubset<T, book_abbreviationFindUniqueArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book_abbreviation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {book_abbreviationFindUniqueOrThrowArgs} args - Arguments to find a Book_abbreviation
     * @example
     * // Get one Book_abbreviation
     * const book_abbreviation = await prisma.book_abbreviation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends book_abbreviationFindUniqueOrThrowArgs>(args: SelectSubset<T, book_abbreviationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_abbreviation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_abbreviationFindFirstArgs} args - Arguments to find a Book_abbreviation
     * @example
     * // Get one Book_abbreviation
     * const book_abbreviation = await prisma.book_abbreviation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends book_abbreviationFindFirstArgs>(args?: SelectSubset<T, book_abbreviationFindFirstArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_abbreviation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_abbreviationFindFirstOrThrowArgs} args - Arguments to find a Book_abbreviation
     * @example
     * // Get one Book_abbreviation
     * const book_abbreviation = await prisma.book_abbreviation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends book_abbreviationFindFirstOrThrowArgs>(args?: SelectSubset<T, book_abbreviationFindFirstOrThrowArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_abbreviations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_abbreviationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_abbreviations
     * const book_abbreviations = await prisma.book_abbreviation.findMany()
     * 
     * // Get first 10 Book_abbreviations
     * const book_abbreviations = await prisma.book_abbreviation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const book_abbreviationWithIdOnly = await prisma.book_abbreviation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends book_abbreviationFindManyArgs>(args?: SelectSubset<T, book_abbreviationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book_abbreviation.
     * @param {book_abbreviationCreateArgs} args - Arguments to create a Book_abbreviation.
     * @example
     * // Create one Book_abbreviation
     * const Book_abbreviation = await prisma.book_abbreviation.create({
     *   data: {
     *     // ... data to create a Book_abbreviation
     *   }
     * })
     * 
     */
    create<T extends book_abbreviationCreateArgs>(args: SelectSubset<T, book_abbreviationCreateArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Book_abbreviations.
     * @param {book_abbreviationCreateManyArgs} args - Arguments to create many Book_abbreviations.
     * @example
     * // Create many Book_abbreviations
     * const book_abbreviation = await prisma.book_abbreviation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends book_abbreviationCreateManyArgs>(args?: SelectSubset<T, book_abbreviationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book_abbreviation.
     * @param {book_abbreviationDeleteArgs} args - Arguments to delete one Book_abbreviation.
     * @example
     * // Delete one Book_abbreviation
     * const Book_abbreviation = await prisma.book_abbreviation.delete({
     *   where: {
     *     // ... filter to delete one Book_abbreviation
     *   }
     * })
     * 
     */
    delete<T extends book_abbreviationDeleteArgs>(args: SelectSubset<T, book_abbreviationDeleteArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book_abbreviation.
     * @param {book_abbreviationUpdateArgs} args - Arguments to update one Book_abbreviation.
     * @example
     * // Update one Book_abbreviation
     * const book_abbreviation = await prisma.book_abbreviation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends book_abbreviationUpdateArgs>(args: SelectSubset<T, book_abbreviationUpdateArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Book_abbreviations.
     * @param {book_abbreviationDeleteManyArgs} args - Arguments to filter Book_abbreviations to delete.
     * @example
     * // Delete a few Book_abbreviations
     * const { count } = await prisma.book_abbreviation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends book_abbreviationDeleteManyArgs>(args?: SelectSubset<T, book_abbreviationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_abbreviations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_abbreviationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_abbreviations
     * const book_abbreviation = await prisma.book_abbreviation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends book_abbreviationUpdateManyArgs>(args: SelectSubset<T, book_abbreviationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book_abbreviation.
     * @param {book_abbreviationUpsertArgs} args - Arguments to update or create a Book_abbreviation.
     * @example
     * // Update or create a Book_abbreviation
     * const book_abbreviation = await prisma.book_abbreviation.upsert({
     *   create: {
     *     // ... data to create a Book_abbreviation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_abbreviation we want to update
     *   }
     * })
     */
    upsert<T extends book_abbreviationUpsertArgs>(args: SelectSubset<T, book_abbreviationUpsertArgs<ExtArgs>>): Prisma__book_abbreviationClient<$Result.GetResult<Prisma.$book_abbreviationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_abbreviations that matches the filter.
     * @param {book_abbreviationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const book_abbreviation = await prisma.book_abbreviation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: book_abbreviationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Book_abbreviation.
     * @param {book_abbreviationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const book_abbreviation = await prisma.book_abbreviation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: book_abbreviationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Book_abbreviations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_abbreviationCountArgs} args - Arguments to filter Book_abbreviations to count.
     * @example
     * // Count the number of Book_abbreviations
     * const count = await prisma.book_abbreviation.count({
     *   where: {
     *     // ... the filter for the Book_abbreviations we want to count
     *   }
     * })
    **/
    count<T extends book_abbreviationCountArgs>(
      args?: Subset<T, book_abbreviationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_abbreviationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_abbreviation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_abbreviationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Book_abbreviationAggregateArgs>(args: Subset<T, Book_abbreviationAggregateArgs>): Prisma.PrismaPromise<GetBook_abbreviationAggregateType<T>>

    /**
     * Group by Book_abbreviation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_abbreviationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends book_abbreviationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: book_abbreviationGroupByArgs['orderBy'] }
        : { orderBy?: book_abbreviationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, book_abbreviationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_abbreviationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book_abbreviation model
   */
  readonly fields: book_abbreviationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book_abbreviation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__book_abbreviationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book_abbreviation model
   */
  interface book_abbreviationFieldRefs {
    readonly id: FieldRef<"book_abbreviation", 'String'>
    readonly book_id: FieldRef<"book_abbreviation", 'Int'>
    readonly value: FieldRef<"book_abbreviation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * book_abbreviation findUnique
   */
  export type book_abbreviationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * Filter, which book_abbreviation to fetch.
     */
    where: book_abbreviationWhereUniqueInput
  }

  /**
   * book_abbreviation findUniqueOrThrow
   */
  export type book_abbreviationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * Filter, which book_abbreviation to fetch.
     */
    where: book_abbreviationWhereUniqueInput
  }

  /**
   * book_abbreviation findFirst
   */
  export type book_abbreviationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * Filter, which book_abbreviation to fetch.
     */
    where?: book_abbreviationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_abbreviations to fetch.
     */
    orderBy?: book_abbreviationOrderByWithRelationInput | book_abbreviationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_abbreviations.
     */
    cursor?: book_abbreviationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_abbreviations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_abbreviations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_abbreviations.
     */
    distinct?: Book_abbreviationScalarFieldEnum | Book_abbreviationScalarFieldEnum[]
  }

  /**
   * book_abbreviation findFirstOrThrow
   */
  export type book_abbreviationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * Filter, which book_abbreviation to fetch.
     */
    where?: book_abbreviationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_abbreviations to fetch.
     */
    orderBy?: book_abbreviationOrderByWithRelationInput | book_abbreviationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_abbreviations.
     */
    cursor?: book_abbreviationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_abbreviations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_abbreviations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_abbreviations.
     */
    distinct?: Book_abbreviationScalarFieldEnum | Book_abbreviationScalarFieldEnum[]
  }

  /**
   * book_abbreviation findMany
   */
  export type book_abbreviationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * Filter, which book_abbreviations to fetch.
     */
    where?: book_abbreviationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_abbreviations to fetch.
     */
    orderBy?: book_abbreviationOrderByWithRelationInput | book_abbreviationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing book_abbreviations.
     */
    cursor?: book_abbreviationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_abbreviations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_abbreviations.
     */
    skip?: number
    distinct?: Book_abbreviationScalarFieldEnum | Book_abbreviationScalarFieldEnum[]
  }

  /**
   * book_abbreviation create
   */
  export type book_abbreviationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * The data needed to create a book_abbreviation.
     */
    data: XOR<book_abbreviationCreateInput, book_abbreviationUncheckedCreateInput>
  }

  /**
   * book_abbreviation createMany
   */
  export type book_abbreviationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many book_abbreviations.
     */
    data: book_abbreviationCreateManyInput | book_abbreviationCreateManyInput[]
  }

  /**
   * book_abbreviation update
   */
  export type book_abbreviationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * The data needed to update a book_abbreviation.
     */
    data: XOR<book_abbreviationUpdateInput, book_abbreviationUncheckedUpdateInput>
    /**
     * Choose, which book_abbreviation to update.
     */
    where: book_abbreviationWhereUniqueInput
  }

  /**
   * book_abbreviation updateMany
   */
  export type book_abbreviationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update book_abbreviations.
     */
    data: XOR<book_abbreviationUpdateManyMutationInput, book_abbreviationUncheckedUpdateManyInput>
    /**
     * Filter which book_abbreviations to update
     */
    where?: book_abbreviationWhereInput
    /**
     * Limit how many book_abbreviations to update.
     */
    limit?: number
  }

  /**
   * book_abbreviation upsert
   */
  export type book_abbreviationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * The filter to search for the book_abbreviation to update in case it exists.
     */
    where: book_abbreviationWhereUniqueInput
    /**
     * In case the book_abbreviation found by the `where` argument doesn't exist, create a new book_abbreviation with this data.
     */
    create: XOR<book_abbreviationCreateInput, book_abbreviationUncheckedCreateInput>
    /**
     * In case the book_abbreviation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<book_abbreviationUpdateInput, book_abbreviationUncheckedUpdateInput>
  }

  /**
   * book_abbreviation delete
   */
  export type book_abbreviationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
    /**
     * Filter which book_abbreviation to delete.
     */
    where: book_abbreviationWhereUniqueInput
  }

  /**
   * book_abbreviation deleteMany
   */
  export type book_abbreviationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_abbreviations to delete
     */
    where?: book_abbreviationWhereInput
    /**
     * Limit how many book_abbreviations to delete.
     */
    limit?: number
  }

  /**
   * book_abbreviation findRaw
   */
  export type book_abbreviationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * book_abbreviation aggregateRaw
   */
  export type book_abbreviationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * book_abbreviation without action
   */
  export type book_abbreviationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_abbreviation
     */
    select?: book_abbreviationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_abbreviation
     */
    omit?: book_abbreviationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_abbreviationInclude<ExtArgs> | null
  }


  /**
   * Model book_name
   */

  export type AggregateBook_name = {
    _count: Book_nameCountAggregateOutputType | null
    _avg: Book_nameAvgAggregateOutputType | null
    _sum: Book_nameSumAggregateOutputType | null
    _min: Book_nameMinAggregateOutputType | null
    _max: Book_nameMaxAggregateOutputType | null
  }

  export type Book_nameAvgAggregateOutputType = {
    book_id: number | null
    book_name_id: number | null
  }

  export type Book_nameSumAggregateOutputType = {
    book_id: number | null
    book_name_id: number | null
  }

  export type Book_nameMinAggregateOutputType = {
    id: string | null
    book_id: number | null
    book_name_id: number | null
    value: string | null
  }

  export type Book_nameMaxAggregateOutputType = {
    id: string | null
    book_id: number | null
    book_name_id: number | null
    value: string | null
  }

  export type Book_nameCountAggregateOutputType = {
    id: number
    book_id: number
    book_name_id: number
    value: number
    _all: number
  }


  export type Book_nameAvgAggregateInputType = {
    book_id?: true
    book_name_id?: true
  }

  export type Book_nameSumAggregateInputType = {
    book_id?: true
    book_name_id?: true
  }

  export type Book_nameMinAggregateInputType = {
    id?: true
    book_id?: true
    book_name_id?: true
    value?: true
  }

  export type Book_nameMaxAggregateInputType = {
    id?: true
    book_id?: true
    book_name_id?: true
    value?: true
  }

  export type Book_nameCountAggregateInputType = {
    id?: true
    book_id?: true
    book_name_id?: true
    value?: true
    _all?: true
  }

  export type Book_nameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_name to aggregate.
     */
    where?: book_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_names to fetch.
     */
    orderBy?: book_nameOrderByWithRelationInput | book_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: book_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned book_names
    **/
    _count?: true | Book_nameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Book_nameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Book_nameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_nameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_nameMaxAggregateInputType
  }

  export type GetBook_nameAggregateType<T extends Book_nameAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_name]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_name[P]>
      : GetScalarType<T[P], AggregateBook_name[P]>
  }




  export type book_nameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_nameWhereInput
    orderBy?: book_nameOrderByWithAggregationInput | book_nameOrderByWithAggregationInput[]
    by: Book_nameScalarFieldEnum[] | Book_nameScalarFieldEnum
    having?: book_nameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_nameCountAggregateInputType | true
    _avg?: Book_nameAvgAggregateInputType
    _sum?: Book_nameSumAggregateInputType
    _min?: Book_nameMinAggregateInputType
    _max?: Book_nameMaxAggregateInputType
  }

  export type Book_nameGroupByOutputType = {
    id: string
    book_id: number
    book_name_id: number
    value: string
    _count: Book_nameCountAggregateOutputType | null
    _avg: Book_nameAvgAggregateOutputType | null
    _sum: Book_nameSumAggregateOutputType | null
    _min: Book_nameMinAggregateOutputType | null
    _max: Book_nameMaxAggregateOutputType | null
  }

  type GetBook_nameGroupByPayload<T extends book_nameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_nameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_nameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_nameGroupByOutputType[P]>
            : GetScalarType<T[P], Book_nameGroupByOutputType[P]>
        }
      >
    >


  export type book_nameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    book_name_id?: boolean
    value?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book_name"]>



  export type book_nameSelectScalar = {
    id?: boolean
    book_id?: boolean
    book_name_id?: boolean
    value?: boolean
  }

  export type book_nameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "book_name_id" | "value", ExtArgs["result"]["book_name"]>
  export type book_nameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $book_namePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book_name"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      book_id: number
      book_name_id: number
      value: string
    }, ExtArgs["result"]["book_name"]>
    composites: {}
  }

  type book_nameGetPayload<S extends boolean | null | undefined | book_nameDefaultArgs> = $Result.GetResult<Prisma.$book_namePayload, S>

  type book_nameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<book_nameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Book_nameCountAggregateInputType | true
    }

  export interface book_nameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book_name'], meta: { name: 'book_name' } }
    /**
     * Find zero or one Book_name that matches the filter.
     * @param {book_nameFindUniqueArgs} args - Arguments to find a Book_name
     * @example
     * // Get one Book_name
     * const book_name = await prisma.book_name.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends book_nameFindUniqueArgs>(args: SelectSubset<T, book_nameFindUniqueArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book_name that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {book_nameFindUniqueOrThrowArgs} args - Arguments to find a Book_name
     * @example
     * // Get one Book_name
     * const book_name = await prisma.book_name.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends book_nameFindUniqueOrThrowArgs>(args: SelectSubset<T, book_nameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_name that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_nameFindFirstArgs} args - Arguments to find a Book_name
     * @example
     * // Get one Book_name
     * const book_name = await prisma.book_name.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends book_nameFindFirstArgs>(args?: SelectSubset<T, book_nameFindFirstArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book_name that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_nameFindFirstOrThrowArgs} args - Arguments to find a Book_name
     * @example
     * // Get one Book_name
     * const book_name = await prisma.book_name.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends book_nameFindFirstOrThrowArgs>(args?: SelectSubset<T, book_nameFindFirstOrThrowArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_names that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_nameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_names
     * const book_names = await prisma.book_name.findMany()
     * 
     * // Get first 10 Book_names
     * const book_names = await prisma.book_name.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const book_nameWithIdOnly = await prisma.book_name.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends book_nameFindManyArgs>(args?: SelectSubset<T, book_nameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book_name.
     * @param {book_nameCreateArgs} args - Arguments to create a Book_name.
     * @example
     * // Create one Book_name
     * const Book_name = await prisma.book_name.create({
     *   data: {
     *     // ... data to create a Book_name
     *   }
     * })
     * 
     */
    create<T extends book_nameCreateArgs>(args: SelectSubset<T, book_nameCreateArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Book_names.
     * @param {book_nameCreateManyArgs} args - Arguments to create many Book_names.
     * @example
     * // Create many Book_names
     * const book_name = await prisma.book_name.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends book_nameCreateManyArgs>(args?: SelectSubset<T, book_nameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book_name.
     * @param {book_nameDeleteArgs} args - Arguments to delete one Book_name.
     * @example
     * // Delete one Book_name
     * const Book_name = await prisma.book_name.delete({
     *   where: {
     *     // ... filter to delete one Book_name
     *   }
     * })
     * 
     */
    delete<T extends book_nameDeleteArgs>(args: SelectSubset<T, book_nameDeleteArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book_name.
     * @param {book_nameUpdateArgs} args - Arguments to update one Book_name.
     * @example
     * // Update one Book_name
     * const book_name = await prisma.book_name.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends book_nameUpdateArgs>(args: SelectSubset<T, book_nameUpdateArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Book_names.
     * @param {book_nameDeleteManyArgs} args - Arguments to filter Book_names to delete.
     * @example
     * // Delete a few Book_names
     * const { count } = await prisma.book_name.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends book_nameDeleteManyArgs>(args?: SelectSubset<T, book_nameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_nameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_names
     * const book_name = await prisma.book_name.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends book_nameUpdateManyArgs>(args: SelectSubset<T, book_nameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book_name.
     * @param {book_nameUpsertArgs} args - Arguments to update or create a Book_name.
     * @example
     * // Update or create a Book_name
     * const book_name = await prisma.book_name.upsert({
     *   create: {
     *     // ... data to create a Book_name
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_name we want to update
     *   }
     * })
     */
    upsert<T extends book_nameUpsertArgs>(args: SelectSubset<T, book_nameUpsertArgs<ExtArgs>>): Prisma__book_nameClient<$Result.GetResult<Prisma.$book_namePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Book_names that matches the filter.
     * @param {book_nameFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const book_name = await prisma.book_name.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: book_nameFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Book_name.
     * @param {book_nameAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const book_name = await prisma.book_name.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: book_nameAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Book_names.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_nameCountArgs} args - Arguments to filter Book_names to count.
     * @example
     * // Count the number of Book_names
     * const count = await prisma.book_name.count({
     *   where: {
     *     // ... the filter for the Book_names we want to count
     *   }
     * })
    **/
    count<T extends book_nameCountArgs>(
      args?: Subset<T, book_nameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_nameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_name.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_nameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Book_nameAggregateArgs>(args: Subset<T, Book_nameAggregateArgs>): Prisma.PrismaPromise<GetBook_nameAggregateType<T>>

    /**
     * Group by Book_name.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_nameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends book_nameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: book_nameGroupByArgs['orderBy'] }
        : { orderBy?: book_nameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, book_nameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_nameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book_name model
   */
  readonly fields: book_nameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book_name.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__book_nameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book_name model
   */
  interface book_nameFieldRefs {
    readonly id: FieldRef<"book_name", 'String'>
    readonly book_id: FieldRef<"book_name", 'Int'>
    readonly book_name_id: FieldRef<"book_name", 'Int'>
    readonly value: FieldRef<"book_name", 'String'>
  }
    

  // Custom InputTypes
  /**
   * book_name findUnique
   */
  export type book_nameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * Filter, which book_name to fetch.
     */
    where: book_nameWhereUniqueInput
  }

  /**
   * book_name findUniqueOrThrow
   */
  export type book_nameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * Filter, which book_name to fetch.
     */
    where: book_nameWhereUniqueInput
  }

  /**
   * book_name findFirst
   */
  export type book_nameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * Filter, which book_name to fetch.
     */
    where?: book_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_names to fetch.
     */
    orderBy?: book_nameOrderByWithRelationInput | book_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_names.
     */
    cursor?: book_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_names.
     */
    distinct?: Book_nameScalarFieldEnum | Book_nameScalarFieldEnum[]
  }

  /**
   * book_name findFirstOrThrow
   */
  export type book_nameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * Filter, which book_name to fetch.
     */
    where?: book_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_names to fetch.
     */
    orderBy?: book_nameOrderByWithRelationInput | book_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_names.
     */
    cursor?: book_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_names.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_names.
     */
    distinct?: Book_nameScalarFieldEnum | Book_nameScalarFieldEnum[]
  }

  /**
   * book_name findMany
   */
  export type book_nameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * Filter, which book_names to fetch.
     */
    where?: book_nameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_names to fetch.
     */
    orderBy?: book_nameOrderByWithRelationInput | book_nameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing book_names.
     */
    cursor?: book_nameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_names from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_names.
     */
    skip?: number
    distinct?: Book_nameScalarFieldEnum | Book_nameScalarFieldEnum[]
  }

  /**
   * book_name create
   */
  export type book_nameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * The data needed to create a book_name.
     */
    data: XOR<book_nameCreateInput, book_nameUncheckedCreateInput>
  }

  /**
   * book_name createMany
   */
  export type book_nameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many book_names.
     */
    data: book_nameCreateManyInput | book_nameCreateManyInput[]
  }

  /**
   * book_name update
   */
  export type book_nameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * The data needed to update a book_name.
     */
    data: XOR<book_nameUpdateInput, book_nameUncheckedUpdateInput>
    /**
     * Choose, which book_name to update.
     */
    where: book_nameWhereUniqueInput
  }

  /**
   * book_name updateMany
   */
  export type book_nameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update book_names.
     */
    data: XOR<book_nameUpdateManyMutationInput, book_nameUncheckedUpdateManyInput>
    /**
     * Filter which book_names to update
     */
    where?: book_nameWhereInput
    /**
     * Limit how many book_names to update.
     */
    limit?: number
  }

  /**
   * book_name upsert
   */
  export type book_nameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * The filter to search for the book_name to update in case it exists.
     */
    where: book_nameWhereUniqueInput
    /**
     * In case the book_name found by the `where` argument doesn't exist, create a new book_name with this data.
     */
    create: XOR<book_nameCreateInput, book_nameUncheckedCreateInput>
    /**
     * In case the book_name was found with the provided `where` argument, update it with this data.
     */
    update: XOR<book_nameUpdateInput, book_nameUncheckedUpdateInput>
  }

  /**
   * book_name delete
   */
  export type book_nameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
    /**
     * Filter which book_name to delete.
     */
    where: book_nameWhereUniqueInput
  }

  /**
   * book_name deleteMany
   */
  export type book_nameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_names to delete
     */
    where?: book_nameWhereInput
    /**
     * Limit how many book_names to delete.
     */
    limit?: number
  }

  /**
   * book_name findRaw
   */
  export type book_nameFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * book_name aggregateRaw
   */
  export type book_nameAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * book_name without action
   */
  export type book_nameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_name
     */
    select?: book_nameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book_name
     */
    omit?: book_nameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: book_nameInclude<ExtArgs> | null
  }


  /**
   * Model chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    book_id: number | null
    chapter: number | null
  }

  export type ChapterSumAggregateOutputType = {
    book_id: number | null
    chapter: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    book_id: number | null
    chapter: number | null
    chapter_id: string | null
    content: string | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    book_id: number | null
    chapter: number | null
    chapter_id: string | null
    content: string | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    book_id: number
    chapter: number
    chapter_id: number
    content: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    book_id?: true
    chapter?: true
  }

  export type ChapterSumAggregateInputType = {
    book_id?: true
    chapter?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    book_id?: true
    chapter?: true
    chapter_id?: true
    content?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    book_id?: true
    chapter?: true
    chapter_id?: true
    content?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    book_id?: true
    chapter?: true
    chapter_id?: true
    content?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapter to aggregate.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type chapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapterWhereInput
    orderBy?: chapterOrderByWithAggregationInput | chapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: chapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    book_id: number
    chapter: number
    chapter_id: string
    content: string
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends chapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type chapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    chapter?: boolean
    chapter_id?: boolean
    content?: boolean
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>



  export type chapterSelectScalar = {
    id?: boolean
    book_id?: boolean
    chapter?: boolean
    chapter_id?: boolean
    content?: boolean
  }

  export type chapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "chapter" | "chapter_id" | "content", ExtArgs["result"]["chapter"]>
  export type chapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $chapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chapter"
    objects: {
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      book_id: number
      chapter: number
      chapter_id: string
      content: string
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type chapterGetPayload<S extends boolean | null | undefined | chapterDefaultArgs> = $Result.GetResult<Prisma.$chapterPayload, S>

  type chapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface chapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chapter'], meta: { name: 'chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {chapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chapterFindUniqueArgs>(args: SelectSubset<T, chapterFindUniqueArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chapterFindUniqueOrThrowArgs>(args: SelectSubset<T, chapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chapterFindFirstArgs>(args?: SelectSubset<T, chapterFindFirstArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chapterFindFirstOrThrowArgs>(args?: SelectSubset<T, chapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chapterFindManyArgs>(args?: SelectSubset<T, chapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {chapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends chapterCreateArgs>(args: SelectSubset<T, chapterCreateArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {chapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chapterCreateManyArgs>(args?: SelectSubset<T, chapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chapter.
     * @param {chapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends chapterDeleteArgs>(args: SelectSubset<T, chapterDeleteArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {chapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chapterUpdateArgs>(args: SelectSubset<T, chapterUpdateArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {chapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chapterDeleteManyArgs>(args?: SelectSubset<T, chapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chapterUpdateManyArgs>(args: SelectSubset<T, chapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chapter.
     * @param {chapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends chapterUpsertArgs>(args: SelectSubset<T, chapterUpsertArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * @param {chapterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chapter = await prisma.chapter.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: chapterFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Chapter.
     * @param {chapterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chapter = await prisma.chapter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: chapterAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends chapterCountArgs>(
      args?: Subset<T, chapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends chapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chapterGroupByArgs['orderBy'] }
        : { orderBy?: chapterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, chapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chapter model
   */
  readonly fields: chapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the chapter model
   */
  interface chapterFieldRefs {
    readonly id: FieldRef<"chapter", 'String'>
    readonly book_id: FieldRef<"chapter", 'Int'>
    readonly chapter: FieldRef<"chapter", 'Int'>
    readonly chapter_id: FieldRef<"chapter", 'String'>
    readonly content: FieldRef<"chapter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chapter findUnique
   */
  export type chapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter findUniqueOrThrow
   */
  export type chapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter findFirst
   */
  export type chapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapters.
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * chapter findFirstOrThrow
   */
  export type chapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapters.
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * chapter findMany
   */
  export type chapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapters to fetch.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chapters.
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * chapter create
   */
  export type chapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * The data needed to create a chapter.
     */
    data: XOR<chapterCreateInput, chapterUncheckedCreateInput>
  }

  /**
   * chapter createMany
   */
  export type chapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chapters.
     */
    data: chapterCreateManyInput | chapterCreateManyInput[]
  }

  /**
   * chapter update
   */
  export type chapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * The data needed to update a chapter.
     */
    data: XOR<chapterUpdateInput, chapterUncheckedUpdateInput>
    /**
     * Choose, which chapter to update.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter updateMany
   */
  export type chapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chapters.
     */
    data: XOR<chapterUpdateManyMutationInput, chapterUncheckedUpdateManyInput>
    /**
     * Filter which chapters to update
     */
    where?: chapterWhereInput
    /**
     * Limit how many chapters to update.
     */
    limit?: number
  }

  /**
   * chapter upsert
   */
  export type chapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * The filter to search for the chapter to update in case it exists.
     */
    where: chapterWhereUniqueInput
    /**
     * In case the chapter found by the `where` argument doesn't exist, create a new chapter with this data.
     */
    create: XOR<chapterCreateInput, chapterUncheckedCreateInput>
    /**
     * In case the chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chapterUpdateInput, chapterUncheckedUpdateInput>
  }

  /**
   * chapter delete
   */
  export type chapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter which chapter to delete.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter deleteMany
   */
  export type chapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapters to delete
     */
    where?: chapterWhereInput
    /**
     * Limit how many chapters to delete.
     */
    limit?: number
  }

  /**
   * chapter findRaw
   */
  export type chapterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * chapter aggregateRaw
   */
  export type chapterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * chapter without action
   */
  export type chapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const BookScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    chapter_count: 'chapter_count',
    code: 'code',
    order: 'order'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const Book_abbreviationScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    value: 'value'
  };

  export type Book_abbreviationScalarFieldEnum = (typeof Book_abbreviationScalarFieldEnum)[keyof typeof Book_abbreviationScalarFieldEnum]


  export const Book_nameScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    book_name_id: 'book_name_id',
    value: 'value'
  };

  export type Book_nameScalarFieldEnum = (typeof Book_nameScalarFieldEnum)[keyof typeof Book_nameScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    chapter: 'chapter',
    chapter_id: 'chapter_id',
    content: 'content'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    id?: StringFilter<"book"> | string
    book_id?: IntFilter<"book"> | number
    chapter_count?: IntFilter<"book"> | number
    code?: StringFilter<"book"> | string
    order?: IntFilter<"book"> | number
    book_name?: XOR<Book_nameNullableScalarRelationFilter, book_nameWhereInput> | null
    book_abbreviation?: XOR<Book_abbreviationNullableScalarRelationFilter, book_abbreviationWhereInput> | null
    chapter?: ChapterListRelationFilter
  }

  export type bookOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter_count?: SortOrder
    code?: SortOrder
    order?: SortOrder
    book_name?: book_nameOrderByWithRelationInput
    book_abbreviation?: book_abbreviationOrderByWithRelationInput
    chapter?: chapterOrderByRelationAggregateInput
  }

  export type bookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    book_id?: number
    code?: string
    order?: number
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    chapter_count?: IntFilter<"book"> | number
    book_name?: XOR<Book_nameNullableScalarRelationFilter, book_nameWhereInput> | null
    book_abbreviation?: XOR<Book_abbreviationNullableScalarRelationFilter, book_abbreviationWhereInput> | null
    chapter?: ChapterListRelationFilter
  }, "id" | "book_id" | "code" | "order">

  export type bookOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter_count?: SortOrder
    code?: SortOrder
    order?: SortOrder
    _count?: bookCountOrderByAggregateInput
    _avg?: bookAvgOrderByAggregateInput
    _max?: bookMaxOrderByAggregateInput
    _min?: bookMinOrderByAggregateInput
    _sum?: bookSumOrderByAggregateInput
  }

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    OR?: bookScalarWhereWithAggregatesInput[]
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"book"> | string
    book_id?: IntWithAggregatesFilter<"book"> | number
    chapter_count?: IntWithAggregatesFilter<"book"> | number
    code?: StringWithAggregatesFilter<"book"> | string
    order?: IntWithAggregatesFilter<"book"> | number
  }

  export type book_abbreviationWhereInput = {
    AND?: book_abbreviationWhereInput | book_abbreviationWhereInput[]
    OR?: book_abbreviationWhereInput[]
    NOT?: book_abbreviationWhereInput | book_abbreviationWhereInput[]
    id?: StringFilter<"book_abbreviation"> | string
    book_id?: IntFilter<"book_abbreviation"> | number
    value?: StringFilter<"book_abbreviation"> | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type book_abbreviationOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    value?: SortOrder
    book?: bookOrderByWithRelationInput
  }

  export type book_abbreviationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    book_id?: number
    value?: string
    AND?: book_abbreviationWhereInput | book_abbreviationWhereInput[]
    OR?: book_abbreviationWhereInput[]
    NOT?: book_abbreviationWhereInput | book_abbreviationWhereInput[]
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "id" | "book_id" | "value">

  export type book_abbreviationOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    value?: SortOrder
    _count?: book_abbreviationCountOrderByAggregateInput
    _avg?: book_abbreviationAvgOrderByAggregateInput
    _max?: book_abbreviationMaxOrderByAggregateInput
    _min?: book_abbreviationMinOrderByAggregateInput
    _sum?: book_abbreviationSumOrderByAggregateInput
  }

  export type book_abbreviationScalarWhereWithAggregatesInput = {
    AND?: book_abbreviationScalarWhereWithAggregatesInput | book_abbreviationScalarWhereWithAggregatesInput[]
    OR?: book_abbreviationScalarWhereWithAggregatesInput[]
    NOT?: book_abbreviationScalarWhereWithAggregatesInput | book_abbreviationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"book_abbreviation"> | string
    book_id?: IntWithAggregatesFilter<"book_abbreviation"> | number
    value?: StringWithAggregatesFilter<"book_abbreviation"> | string
  }

  export type book_nameWhereInput = {
    AND?: book_nameWhereInput | book_nameWhereInput[]
    OR?: book_nameWhereInput[]
    NOT?: book_nameWhereInput | book_nameWhereInput[]
    id?: StringFilter<"book_name"> | string
    book_id?: IntFilter<"book_name"> | number
    book_name_id?: IntFilter<"book_name"> | number
    value?: StringFilter<"book_name"> | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type book_nameOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    book_name_id?: SortOrder
    value?: SortOrder
    book?: bookOrderByWithRelationInput
  }

  export type book_nameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    book_id?: number
    book_name_id?: number
    value?: string
    AND?: book_nameWhereInput | book_nameWhereInput[]
    OR?: book_nameWhereInput[]
    NOT?: book_nameWhereInput | book_nameWhereInput[]
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "id" | "book_id" | "book_name_id" | "value">

  export type book_nameOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    book_name_id?: SortOrder
    value?: SortOrder
    _count?: book_nameCountOrderByAggregateInput
    _avg?: book_nameAvgOrderByAggregateInput
    _max?: book_nameMaxOrderByAggregateInput
    _min?: book_nameMinOrderByAggregateInput
    _sum?: book_nameSumOrderByAggregateInput
  }

  export type book_nameScalarWhereWithAggregatesInput = {
    AND?: book_nameScalarWhereWithAggregatesInput | book_nameScalarWhereWithAggregatesInput[]
    OR?: book_nameScalarWhereWithAggregatesInput[]
    NOT?: book_nameScalarWhereWithAggregatesInput | book_nameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"book_name"> | string
    book_id?: IntWithAggregatesFilter<"book_name"> | number
    book_name_id?: IntWithAggregatesFilter<"book_name"> | number
    value?: StringWithAggregatesFilter<"book_name"> | string
  }

  export type chapterWhereInput = {
    AND?: chapterWhereInput | chapterWhereInput[]
    OR?: chapterWhereInput[]
    NOT?: chapterWhereInput | chapterWhereInput[]
    id?: StringFilter<"chapter"> | string
    book_id?: IntFilter<"chapter"> | number
    chapter?: IntFilter<"chapter"> | number
    chapter_id?: StringFilter<"chapter"> | string
    content?: StringFilter<"chapter"> | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }

  export type chapterOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter?: SortOrder
    chapter_id?: SortOrder
    content?: SortOrder
    book?: bookOrderByWithRelationInput
  }

  export type chapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chapter_id?: string
    AND?: chapterWhereInput | chapterWhereInput[]
    OR?: chapterWhereInput[]
    NOT?: chapterWhereInput | chapterWhereInput[]
    book_id?: IntFilter<"chapter"> | number
    chapter?: IntFilter<"chapter"> | number
    content?: StringFilter<"chapter"> | string
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
  }, "id" | "chapter_id">

  export type chapterOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter?: SortOrder
    chapter_id?: SortOrder
    content?: SortOrder
    _count?: chapterCountOrderByAggregateInput
    _avg?: chapterAvgOrderByAggregateInput
    _max?: chapterMaxOrderByAggregateInput
    _min?: chapterMinOrderByAggregateInput
    _sum?: chapterSumOrderByAggregateInput
  }

  export type chapterScalarWhereWithAggregatesInput = {
    AND?: chapterScalarWhereWithAggregatesInput | chapterScalarWhereWithAggregatesInput[]
    OR?: chapterScalarWhereWithAggregatesInput[]
    NOT?: chapterScalarWhereWithAggregatesInput | chapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chapter"> | string
    book_id?: IntWithAggregatesFilter<"chapter"> | number
    chapter?: IntWithAggregatesFilter<"chapter"> | number
    chapter_id?: StringWithAggregatesFilter<"chapter"> | string
    content?: StringWithAggregatesFilter<"chapter"> | string
  }

  export type bookCreateInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_name?: book_nameCreateNestedOneWithoutBookInput
    book_abbreviation?: book_abbreviationCreateNestedOneWithoutBookInput
    chapter?: chapterCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_name?: book_nameUncheckedCreateNestedOneWithoutBookInput
    book_abbreviation?: book_abbreviationUncheckedCreateNestedOneWithoutBookInput
    chapter?: chapterUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_name?: book_nameUpdateOneWithoutBookNestedInput
    book_abbreviation?: book_abbreviationUpdateOneWithoutBookNestedInput
    chapter?: chapterUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_name?: book_nameUncheckedUpdateOneWithoutBookNestedInput
    book_abbreviation?: book_abbreviationUncheckedUpdateOneWithoutBookNestedInput
    chapter?: chapterUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateManyInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
  }

  export type bookUpdateManyMutationInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type bookUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type book_abbreviationCreateInput = {
    id?: string
    value: string
    book: bookCreateNestedOneWithoutBook_abbreviationInput
  }

  export type book_abbreviationUncheckedCreateInput = {
    id?: string
    book_id: number
    value: string
  }

  export type book_abbreviationUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    book?: bookUpdateOneRequiredWithoutBook_abbreviationNestedInput
  }

  export type book_abbreviationUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_abbreviationCreateManyInput = {
    id?: string
    book_id: number
    value: string
  }

  export type book_abbreviationUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_abbreviationUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_nameCreateInput = {
    id?: string
    book_name_id: number
    value: string
    book: bookCreateNestedOneWithoutBook_nameInput
  }

  export type book_nameUncheckedCreateInput = {
    id?: string
    book_id: number
    book_name_id: number
    value: string
  }

  export type book_nameUpdateInput = {
    book_name_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    book?: bookUpdateOneRequiredWithoutBook_nameNestedInput
  }

  export type book_nameUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    book_name_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_nameCreateManyInput = {
    id?: string
    book_id: number
    book_name_id: number
    value: string
  }

  export type book_nameUpdateManyMutationInput = {
    book_name_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_nameUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    book_name_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type chapterCreateInput = {
    id?: string
    chapter: number
    chapter_id: string
    content: string
    book: bookCreateNestedOneWithoutChapterInput
  }

  export type chapterUncheckedCreateInput = {
    id?: string
    book_id: number
    chapter: number
    chapter_id: string
    content: string
  }

  export type chapterUpdateInput = {
    chapter?: IntFieldUpdateOperationsInput | number
    chapter_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    book?: bookUpdateOneRequiredWithoutChapterNestedInput
  }

  export type chapterUncheckedUpdateInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    chapter_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type chapterCreateManyInput = {
    id?: string
    book_id: number
    chapter: number
    chapter_id: string
    content: string
  }

  export type chapterUpdateManyMutationInput = {
    chapter?: IntFieldUpdateOperationsInput | number
    chapter_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type chapterUncheckedUpdateManyInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter?: IntFieldUpdateOperationsInput | number
    chapter_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Book_nameNullableScalarRelationFilter = {
    is?: book_nameWhereInput | null
    isNot?: book_nameWhereInput | null
  }

  export type Book_abbreviationNullableScalarRelationFilter = {
    is?: book_abbreviationWhereInput | null
    isNot?: book_abbreviationWhereInput | null
  }

  export type ChapterListRelationFilter = {
    every?: chapterWhereInput
    some?: chapterWhereInput
    none?: chapterWhereInput
  }

  export type chapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter_count?: SortOrder
    code?: SortOrder
    order?: SortOrder
  }

  export type bookAvgOrderByAggregateInput = {
    book_id?: SortOrder
    chapter_count?: SortOrder
    order?: SortOrder
  }

  export type bookMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter_count?: SortOrder
    code?: SortOrder
    order?: SortOrder
  }

  export type bookMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter_count?: SortOrder
    code?: SortOrder
    order?: SortOrder
  }

  export type bookSumOrderByAggregateInput = {
    book_id?: SortOrder
    chapter_count?: SortOrder
    order?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BookScalarRelationFilter = {
    is?: bookWhereInput
    isNot?: bookWhereInput
  }

  export type book_abbreviationCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    value?: SortOrder
  }

  export type book_abbreviationAvgOrderByAggregateInput = {
    book_id?: SortOrder
  }

  export type book_abbreviationMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    value?: SortOrder
  }

  export type book_abbreviationMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    value?: SortOrder
  }

  export type book_abbreviationSumOrderByAggregateInput = {
    book_id?: SortOrder
  }

  export type book_nameCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    book_name_id?: SortOrder
    value?: SortOrder
  }

  export type book_nameAvgOrderByAggregateInput = {
    book_id?: SortOrder
    book_name_id?: SortOrder
  }

  export type book_nameMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    book_name_id?: SortOrder
    value?: SortOrder
  }

  export type book_nameMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    book_name_id?: SortOrder
    value?: SortOrder
  }

  export type book_nameSumOrderByAggregateInput = {
    book_id?: SortOrder
    book_name_id?: SortOrder
  }

  export type chapterCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter?: SortOrder
    chapter_id?: SortOrder
    content?: SortOrder
  }

  export type chapterAvgOrderByAggregateInput = {
    book_id?: SortOrder
    chapter?: SortOrder
  }

  export type chapterMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter?: SortOrder
    chapter_id?: SortOrder
    content?: SortOrder
  }

  export type chapterMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    chapter?: SortOrder
    chapter_id?: SortOrder
    content?: SortOrder
  }

  export type chapterSumOrderByAggregateInput = {
    book_id?: SortOrder
    chapter?: SortOrder
  }

  export type book_nameCreateNestedOneWithoutBookInput = {
    create?: XOR<book_nameCreateWithoutBookInput, book_nameUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_nameCreateOrConnectWithoutBookInput
    connect?: book_nameWhereUniqueInput
  }

  export type book_abbreviationCreateNestedOneWithoutBookInput = {
    create?: XOR<book_abbreviationCreateWithoutBookInput, book_abbreviationUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_abbreviationCreateOrConnectWithoutBookInput
    connect?: book_abbreviationWhereUniqueInput
  }

  export type chapterCreateNestedManyWithoutBookInput = {
    create?: XOR<chapterCreateWithoutBookInput, chapterUncheckedCreateWithoutBookInput> | chapterCreateWithoutBookInput[] | chapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutBookInput | chapterCreateOrConnectWithoutBookInput[]
    createMany?: chapterCreateManyBookInputEnvelope
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
  }

  export type book_nameUncheckedCreateNestedOneWithoutBookInput = {
    create?: XOR<book_nameCreateWithoutBookInput, book_nameUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_nameCreateOrConnectWithoutBookInput
    connect?: book_nameWhereUniqueInput
  }

  export type book_abbreviationUncheckedCreateNestedOneWithoutBookInput = {
    create?: XOR<book_abbreviationCreateWithoutBookInput, book_abbreviationUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_abbreviationCreateOrConnectWithoutBookInput
    connect?: book_abbreviationWhereUniqueInput
  }

  export type chapterUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<chapterCreateWithoutBookInput, chapterUncheckedCreateWithoutBookInput> | chapterCreateWithoutBookInput[] | chapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutBookInput | chapterCreateOrConnectWithoutBookInput[]
    createMany?: chapterCreateManyBookInputEnvelope
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type book_nameUpdateOneWithoutBookNestedInput = {
    create?: XOR<book_nameCreateWithoutBookInput, book_nameUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_nameCreateOrConnectWithoutBookInput
    upsert?: book_nameUpsertWithoutBookInput
    disconnect?: book_nameWhereInput | boolean
    delete?: book_nameWhereInput | boolean
    connect?: book_nameWhereUniqueInput
    update?: XOR<XOR<book_nameUpdateToOneWithWhereWithoutBookInput, book_nameUpdateWithoutBookInput>, book_nameUncheckedUpdateWithoutBookInput>
  }

  export type book_abbreviationUpdateOneWithoutBookNestedInput = {
    create?: XOR<book_abbreviationCreateWithoutBookInput, book_abbreviationUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_abbreviationCreateOrConnectWithoutBookInput
    upsert?: book_abbreviationUpsertWithoutBookInput
    disconnect?: book_abbreviationWhereInput | boolean
    delete?: book_abbreviationWhereInput | boolean
    connect?: book_abbreviationWhereUniqueInput
    update?: XOR<XOR<book_abbreviationUpdateToOneWithWhereWithoutBookInput, book_abbreviationUpdateWithoutBookInput>, book_abbreviationUncheckedUpdateWithoutBookInput>
  }

  export type chapterUpdateManyWithoutBookNestedInput = {
    create?: XOR<chapterCreateWithoutBookInput, chapterUncheckedCreateWithoutBookInput> | chapterCreateWithoutBookInput[] | chapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutBookInput | chapterCreateOrConnectWithoutBookInput[]
    upsert?: chapterUpsertWithWhereUniqueWithoutBookInput | chapterUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: chapterCreateManyBookInputEnvelope
    set?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    disconnect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    delete?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    update?: chapterUpdateWithWhereUniqueWithoutBookInput | chapterUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: chapterUpdateManyWithWhereWithoutBookInput | chapterUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: chapterScalarWhereInput | chapterScalarWhereInput[]
  }

  export type book_nameUncheckedUpdateOneWithoutBookNestedInput = {
    create?: XOR<book_nameCreateWithoutBookInput, book_nameUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_nameCreateOrConnectWithoutBookInput
    upsert?: book_nameUpsertWithoutBookInput
    disconnect?: book_nameWhereInput | boolean
    delete?: book_nameWhereInput | boolean
    connect?: book_nameWhereUniqueInput
    update?: XOR<XOR<book_nameUpdateToOneWithWhereWithoutBookInput, book_nameUpdateWithoutBookInput>, book_nameUncheckedUpdateWithoutBookInput>
  }

  export type book_abbreviationUncheckedUpdateOneWithoutBookNestedInput = {
    create?: XOR<book_abbreviationCreateWithoutBookInput, book_abbreviationUncheckedCreateWithoutBookInput>
    connectOrCreate?: book_abbreviationCreateOrConnectWithoutBookInput
    upsert?: book_abbreviationUpsertWithoutBookInput
    disconnect?: book_abbreviationWhereInput | boolean
    delete?: book_abbreviationWhereInput | boolean
    connect?: book_abbreviationWhereUniqueInput
    update?: XOR<XOR<book_abbreviationUpdateToOneWithWhereWithoutBookInput, book_abbreviationUpdateWithoutBookInput>, book_abbreviationUncheckedUpdateWithoutBookInput>
  }

  export type chapterUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<chapterCreateWithoutBookInput, chapterUncheckedCreateWithoutBookInput> | chapterCreateWithoutBookInput[] | chapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutBookInput | chapterCreateOrConnectWithoutBookInput[]
    upsert?: chapterUpsertWithWhereUniqueWithoutBookInput | chapterUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: chapterCreateManyBookInputEnvelope
    set?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    disconnect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    delete?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    update?: chapterUpdateWithWhereUniqueWithoutBookInput | chapterUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: chapterUpdateManyWithWhereWithoutBookInput | chapterUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: chapterScalarWhereInput | chapterScalarWhereInput[]
  }

  export type bookCreateNestedOneWithoutBook_abbreviationInput = {
    create?: XOR<bookCreateWithoutBook_abbreviationInput, bookUncheckedCreateWithoutBook_abbreviationInput>
    connectOrCreate?: bookCreateOrConnectWithoutBook_abbreviationInput
    connect?: bookWhereUniqueInput
  }

  export type bookUpdateOneRequiredWithoutBook_abbreviationNestedInput = {
    create?: XOR<bookCreateWithoutBook_abbreviationInput, bookUncheckedCreateWithoutBook_abbreviationInput>
    connectOrCreate?: bookCreateOrConnectWithoutBook_abbreviationInput
    upsert?: bookUpsertWithoutBook_abbreviationInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBook_abbreviationInput, bookUpdateWithoutBook_abbreviationInput>, bookUncheckedUpdateWithoutBook_abbreviationInput>
  }

  export type bookCreateNestedOneWithoutBook_nameInput = {
    create?: XOR<bookCreateWithoutBook_nameInput, bookUncheckedCreateWithoutBook_nameInput>
    connectOrCreate?: bookCreateOrConnectWithoutBook_nameInput
    connect?: bookWhereUniqueInput
  }

  export type bookUpdateOneRequiredWithoutBook_nameNestedInput = {
    create?: XOR<bookCreateWithoutBook_nameInput, bookUncheckedCreateWithoutBook_nameInput>
    connectOrCreate?: bookCreateOrConnectWithoutBook_nameInput
    upsert?: bookUpsertWithoutBook_nameInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBook_nameInput, bookUpdateWithoutBook_nameInput>, bookUncheckedUpdateWithoutBook_nameInput>
  }

  export type bookCreateNestedOneWithoutChapterInput = {
    create?: XOR<bookCreateWithoutChapterInput, bookUncheckedCreateWithoutChapterInput>
    connectOrCreate?: bookCreateOrConnectWithoutChapterInput
    connect?: bookWhereUniqueInput
  }

  export type bookUpdateOneRequiredWithoutChapterNestedInput = {
    create?: XOR<bookCreateWithoutChapterInput, bookUncheckedCreateWithoutChapterInput>
    connectOrCreate?: bookCreateOrConnectWithoutChapterInput
    upsert?: bookUpsertWithoutChapterInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutChapterInput, bookUpdateWithoutChapterInput>, bookUncheckedUpdateWithoutChapterInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type book_nameCreateWithoutBookInput = {
    id?: string
    book_name_id: number
    value: string
  }

  export type book_nameUncheckedCreateWithoutBookInput = {
    id?: string
    book_name_id: number
    value: string
  }

  export type book_nameCreateOrConnectWithoutBookInput = {
    where: book_nameWhereUniqueInput
    create: XOR<book_nameCreateWithoutBookInput, book_nameUncheckedCreateWithoutBookInput>
  }

  export type book_abbreviationCreateWithoutBookInput = {
    id?: string
    value: string
  }

  export type book_abbreviationUncheckedCreateWithoutBookInput = {
    id?: string
    value: string
  }

  export type book_abbreviationCreateOrConnectWithoutBookInput = {
    where: book_abbreviationWhereUniqueInput
    create: XOR<book_abbreviationCreateWithoutBookInput, book_abbreviationUncheckedCreateWithoutBookInput>
  }

  export type chapterCreateWithoutBookInput = {
    id?: string
    chapter: number
    chapter_id: string
    content: string
  }

  export type chapterUncheckedCreateWithoutBookInput = {
    id?: string
    chapter: number
    chapter_id: string
    content: string
  }

  export type chapterCreateOrConnectWithoutBookInput = {
    where: chapterWhereUniqueInput
    create: XOR<chapterCreateWithoutBookInput, chapterUncheckedCreateWithoutBookInput>
  }

  export type chapterCreateManyBookInputEnvelope = {
    data: chapterCreateManyBookInput | chapterCreateManyBookInput[]
  }

  export type book_nameUpsertWithoutBookInput = {
    update: XOR<book_nameUpdateWithoutBookInput, book_nameUncheckedUpdateWithoutBookInput>
    create: XOR<book_nameCreateWithoutBookInput, book_nameUncheckedCreateWithoutBookInput>
    where?: book_nameWhereInput
  }

  export type book_nameUpdateToOneWithWhereWithoutBookInput = {
    where?: book_nameWhereInput
    data: XOR<book_nameUpdateWithoutBookInput, book_nameUncheckedUpdateWithoutBookInput>
  }

  export type book_nameUpdateWithoutBookInput = {
    book_name_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_nameUncheckedUpdateWithoutBookInput = {
    book_name_id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_abbreviationUpsertWithoutBookInput = {
    update: XOR<book_abbreviationUpdateWithoutBookInput, book_abbreviationUncheckedUpdateWithoutBookInput>
    create: XOR<book_abbreviationCreateWithoutBookInput, book_abbreviationUncheckedCreateWithoutBookInput>
    where?: book_abbreviationWhereInput
  }

  export type book_abbreviationUpdateToOneWithWhereWithoutBookInput = {
    where?: book_abbreviationWhereInput
    data: XOR<book_abbreviationUpdateWithoutBookInput, book_abbreviationUncheckedUpdateWithoutBookInput>
  }

  export type book_abbreviationUpdateWithoutBookInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type book_abbreviationUncheckedUpdateWithoutBookInput = {
    value?: StringFieldUpdateOperationsInput | string
  }

  export type chapterUpsertWithWhereUniqueWithoutBookInput = {
    where: chapterWhereUniqueInput
    update: XOR<chapterUpdateWithoutBookInput, chapterUncheckedUpdateWithoutBookInput>
    create: XOR<chapterCreateWithoutBookInput, chapterUncheckedCreateWithoutBookInput>
  }

  export type chapterUpdateWithWhereUniqueWithoutBookInput = {
    where: chapterWhereUniqueInput
    data: XOR<chapterUpdateWithoutBookInput, chapterUncheckedUpdateWithoutBookInput>
  }

  export type chapterUpdateManyWithWhereWithoutBookInput = {
    where: chapterScalarWhereInput
    data: XOR<chapterUpdateManyMutationInput, chapterUncheckedUpdateManyWithoutBookInput>
  }

  export type chapterScalarWhereInput = {
    AND?: chapterScalarWhereInput | chapterScalarWhereInput[]
    OR?: chapterScalarWhereInput[]
    NOT?: chapterScalarWhereInput | chapterScalarWhereInput[]
    id?: StringFilter<"chapter"> | string
    book_id?: IntFilter<"chapter"> | number
    chapter?: IntFilter<"chapter"> | number
    chapter_id?: StringFilter<"chapter"> | string
    content?: StringFilter<"chapter"> | string
  }

  export type bookCreateWithoutBook_abbreviationInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_name?: book_nameCreateNestedOneWithoutBookInput
    chapter?: chapterCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutBook_abbreviationInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_name?: book_nameUncheckedCreateNestedOneWithoutBookInput
    chapter?: chapterUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutBook_abbreviationInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBook_abbreviationInput, bookUncheckedCreateWithoutBook_abbreviationInput>
  }

  export type bookUpsertWithoutBook_abbreviationInput = {
    update: XOR<bookUpdateWithoutBook_abbreviationInput, bookUncheckedUpdateWithoutBook_abbreviationInput>
    create: XOR<bookCreateWithoutBook_abbreviationInput, bookUncheckedCreateWithoutBook_abbreviationInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBook_abbreviationInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBook_abbreviationInput, bookUncheckedUpdateWithoutBook_abbreviationInput>
  }

  export type bookUpdateWithoutBook_abbreviationInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_name?: book_nameUpdateOneWithoutBookNestedInput
    chapter?: chapterUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutBook_abbreviationInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_name?: book_nameUncheckedUpdateOneWithoutBookNestedInput
    chapter?: chapterUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateWithoutBook_nameInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_abbreviation?: book_abbreviationCreateNestedOneWithoutBookInput
    chapter?: chapterCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutBook_nameInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_abbreviation?: book_abbreviationUncheckedCreateNestedOneWithoutBookInput
    chapter?: chapterUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutBook_nameInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBook_nameInput, bookUncheckedCreateWithoutBook_nameInput>
  }

  export type bookUpsertWithoutBook_nameInput = {
    update: XOR<bookUpdateWithoutBook_nameInput, bookUncheckedUpdateWithoutBook_nameInput>
    create: XOR<bookCreateWithoutBook_nameInput, bookUncheckedCreateWithoutBook_nameInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBook_nameInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBook_nameInput, bookUncheckedUpdateWithoutBook_nameInput>
  }

  export type bookUpdateWithoutBook_nameInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_abbreviation?: book_abbreviationUpdateOneWithoutBookNestedInput
    chapter?: chapterUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutBook_nameInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_abbreviation?: book_abbreviationUncheckedUpdateOneWithoutBookNestedInput
    chapter?: chapterUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateWithoutChapterInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_name?: book_nameCreateNestedOneWithoutBookInput
    book_abbreviation?: book_abbreviationCreateNestedOneWithoutBookInput
  }

  export type bookUncheckedCreateWithoutChapterInput = {
    id?: string
    book_id: number
    chapter_count: number
    code: string
    order: number
    book_name?: book_nameUncheckedCreateNestedOneWithoutBookInput
    book_abbreviation?: book_abbreviationUncheckedCreateNestedOneWithoutBookInput
  }

  export type bookCreateOrConnectWithoutChapterInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutChapterInput, bookUncheckedCreateWithoutChapterInput>
  }

  export type bookUpsertWithoutChapterInput = {
    update: XOR<bookUpdateWithoutChapterInput, bookUncheckedUpdateWithoutChapterInput>
    create: XOR<bookCreateWithoutChapterInput, bookUncheckedCreateWithoutChapterInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutChapterInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutChapterInput, bookUncheckedUpdateWithoutChapterInput>
  }

  export type bookUpdateWithoutChapterInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_name?: book_nameUpdateOneWithoutBookNestedInput
    book_abbreviation?: book_abbreviationUpdateOneWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutChapterInput = {
    book_id?: IntFieldUpdateOperationsInput | number
    chapter_count?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    book_name?: book_nameUncheckedUpdateOneWithoutBookNestedInput
    book_abbreviation?: book_abbreviationUncheckedUpdateOneWithoutBookNestedInput
  }

  export type chapterCreateManyBookInput = {
    id?: string
    chapter: number
    chapter_id: string
    content: string
  }

  export type chapterUpdateWithoutBookInput = {
    chapter?: IntFieldUpdateOperationsInput | number
    chapter_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type chapterUncheckedUpdateWithoutBookInput = {
    chapter?: IntFieldUpdateOperationsInput | number
    chapter_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type chapterUncheckedUpdateManyWithoutBookInput = {
    chapter?: IntFieldUpdateOperationsInput | number
    chapter_id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}