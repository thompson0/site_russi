
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
 * Model carros
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type carros = $Result.DefaultSelection<Prisma.$carrosPayload>
/**
 * Model categorias
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model contatos
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type contatos = $Result.DefaultSelection<Prisma.$contatosPayload>
/**
 * Model duvidas
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type duvidas = $Result.DefaultSelection<Prisma.$duvidasPayload>
/**
 * Model manuais
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type manuais = $Result.DefaultSelection<Prisma.$manuaisPayload>
/**
 * Model montadoras
 * 
 */
export type montadoras = $Result.DefaultSelection<Prisma.$montadorasPayload>
/**
 * Model produto_fotos
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type produto_fotos = $Result.DefaultSelection<Prisma.$produto_fotosPayload>
/**
 * Model produtos
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type produtos = $Result.DefaultSelection<Prisma.$produtosPayload>
/**
 * Model usuarios
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model videos
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type videos = $Result.DefaultSelection<Prisma.$videosPayload>
/**
 * Model videos_assistidos
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type videos_assistidos = $Result.DefaultSelection<Prisma.$videos_assistidosPayload>
/**
 * Model videos_instalador
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type videos_instalador = $Result.DefaultSelection<Prisma.$videos_instaladorPayload>
/**
 * Model carro_produtos
 * The underlying table does not contain a valid unique identifier and can therefore currently not be handled by Prisma Client.
 */
export type carro_produtos = $Result.DefaultSelection<Prisma.$carro_produtosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carros
 * const carros = await prisma.carros.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Carros
   * const carros = await prisma.carros.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.carros`: Exposes CRUD operations for the **carros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carros
    * const carros = await prisma.carros.findMany()
    * ```
    */
  get carros(): Prisma.carrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contatos`: Exposes CRUD operations for the **contatos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contatos
    * const contatos = await prisma.contatos.findMany()
    * ```
    */
  get contatos(): Prisma.contatosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.duvidas`: Exposes CRUD operations for the **duvidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Duvidas
    * const duvidas = await prisma.duvidas.findMany()
    * ```
    */
  get duvidas(): Prisma.duvidasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manuais`: Exposes CRUD operations for the **manuais** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manuais
    * const manuais = await prisma.manuais.findMany()
    * ```
    */
  get manuais(): Prisma.manuaisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.montadoras`: Exposes CRUD operations for the **montadoras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Montadoras
    * const montadoras = await prisma.montadoras.findMany()
    * ```
    */
  get montadoras(): Prisma.montadorasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto_fotos`: Exposes CRUD operations for the **produto_fotos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produto_fotos
    * const produto_fotos = await prisma.produto_fotos.findMany()
    * ```
    */
  get produto_fotos(): Prisma.produto_fotosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtos`: Exposes CRUD operations for the **produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produtos.findMany()
    * ```
    */
  get produtos(): Prisma.produtosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videos`: Exposes CRUD operations for the **videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.videos.findMany()
    * ```
    */
  get videos(): Prisma.videosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videos_assistidos`: Exposes CRUD operations for the **videos_assistidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos_assistidos
    * const videos_assistidos = await prisma.videos_assistidos.findMany()
    * ```
    */
  get videos_assistidos(): Prisma.videos_assistidosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videos_instalador`: Exposes CRUD operations for the **videos_instalador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos_instaladors
    * const videos_instaladors = await prisma.videos_instalador.findMany()
    * ```
    */
  get videos_instalador(): Prisma.videos_instaladorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carro_produtos`: Exposes CRUD operations for the **carro_produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carro_produtos
    * const carro_produtos = await prisma.carro_produtos.findMany()
    * ```
    */
  get carro_produtos(): Prisma.carro_produtosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    carros: 'carros',
    categorias: 'categorias',
    contatos: 'contatos',
    duvidas: 'duvidas',
    manuais: 'manuais',
    montadoras: 'montadoras',
    produto_fotos: 'produto_fotos',
    produtos: 'produtos',
    usuarios: 'usuarios',
    videos: 'videos',
    videos_assistidos: 'videos_assistidos',
    videos_instalador: 'videos_instalador',
    carro_produtos: 'carro_produtos'
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
      modelProps: "carros" | "categorias" | "contatos" | "duvidas" | "manuais" | "montadoras" | "produto_fotos" | "produtos" | "usuarios" | "videos" | "videos_assistidos" | "videos_instalador" | "carro_produtos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      carros: {
        payload: Prisma.$carrosPayload<ExtArgs>
        fields: Prisma.carrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          findFirst: {
            args: Prisma.carrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          findMany: {
            args: Prisma.carrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>[]
          }
          create: {
            args: Prisma.carrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          createMany: {
            args: Prisma.carrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carrosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>[]
          }
          delete: {
            args: Prisma.carrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          update: {
            args: Prisma.carrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          deleteMany: {
            args: Prisma.carrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carrosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>[]
          }
          upsert: {
            args: Prisma.carrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrosPayload>
          }
          aggregate: {
            args: Prisma.CarrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarros>
          }
          groupBy: {
            args: Prisma.carrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.carrosCountArgs<ExtArgs>
            result: $Utils.Optional<CarrosCountAggregateOutputType> | number
          }
        }
      }
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      contatos: {
        payload: Prisma.$contatosPayload<ExtArgs>
        fields: Prisma.contatosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contatosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contatosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>
          }
          findFirst: {
            args: Prisma.contatosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contatosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>
          }
          findMany: {
            args: Prisma.contatosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>[]
          }
          create: {
            args: Prisma.contatosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>
          }
          createMany: {
            args: Prisma.contatosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contatosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>[]
          }
          delete: {
            args: Prisma.contatosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>
          }
          update: {
            args: Prisma.contatosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>
          }
          deleteMany: {
            args: Prisma.contatosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contatosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contatosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>[]
          }
          upsert: {
            args: Prisma.contatosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contatosPayload>
          }
          aggregate: {
            args: Prisma.ContatosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContatos>
          }
          groupBy: {
            args: Prisma.contatosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContatosGroupByOutputType>[]
          }
          count: {
            args: Prisma.contatosCountArgs<ExtArgs>
            result: $Utils.Optional<ContatosCountAggregateOutputType> | number
          }
        }
      }
      duvidas: {
        payload: Prisma.$duvidasPayload<ExtArgs>
        fields: Prisma.duvidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.duvidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.duvidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>
          }
          findFirst: {
            args: Prisma.duvidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.duvidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>
          }
          findMany: {
            args: Prisma.duvidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>[]
          }
          create: {
            args: Prisma.duvidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>
          }
          createMany: {
            args: Prisma.duvidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.duvidasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>[]
          }
          delete: {
            args: Prisma.duvidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>
          }
          update: {
            args: Prisma.duvidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>
          }
          deleteMany: {
            args: Prisma.duvidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.duvidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.duvidasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>[]
          }
          upsert: {
            args: Prisma.duvidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$duvidasPayload>
          }
          aggregate: {
            args: Prisma.DuvidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDuvidas>
          }
          groupBy: {
            args: Prisma.duvidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<DuvidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.duvidasCountArgs<ExtArgs>
            result: $Utils.Optional<DuvidasCountAggregateOutputType> | number
          }
        }
      }
      manuais: {
        payload: Prisma.$manuaisPayload<ExtArgs>
        fields: Prisma.manuaisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.manuaisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.manuaisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>
          }
          findFirst: {
            args: Prisma.manuaisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.manuaisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>
          }
          findMany: {
            args: Prisma.manuaisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>[]
          }
          create: {
            args: Prisma.manuaisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>
          }
          createMany: {
            args: Prisma.manuaisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.manuaisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>[]
          }
          delete: {
            args: Prisma.manuaisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>
          }
          update: {
            args: Prisma.manuaisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>
          }
          deleteMany: {
            args: Prisma.manuaisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.manuaisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.manuaisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>[]
          }
          upsert: {
            args: Prisma.manuaisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$manuaisPayload>
          }
          aggregate: {
            args: Prisma.ManuaisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManuais>
          }
          groupBy: {
            args: Prisma.manuaisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManuaisGroupByOutputType>[]
          }
          count: {
            args: Prisma.manuaisCountArgs<ExtArgs>
            result: $Utils.Optional<ManuaisCountAggregateOutputType> | number
          }
        }
      }
      montadoras: {
        payload: Prisma.$montadorasPayload<ExtArgs>
        fields: Prisma.montadorasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.montadorasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.montadorasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>
          }
          findFirst: {
            args: Prisma.montadorasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.montadorasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>
          }
          findMany: {
            args: Prisma.montadorasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>[]
          }
          create: {
            args: Prisma.montadorasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>
          }
          createMany: {
            args: Prisma.montadorasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.montadorasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>[]
          }
          delete: {
            args: Prisma.montadorasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>
          }
          update: {
            args: Prisma.montadorasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>
          }
          deleteMany: {
            args: Prisma.montadorasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.montadorasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.montadorasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>[]
          }
          upsert: {
            args: Prisma.montadorasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$montadorasPayload>
          }
          aggregate: {
            args: Prisma.MontadorasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMontadoras>
          }
          groupBy: {
            args: Prisma.montadorasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MontadorasGroupByOutputType>[]
          }
          count: {
            args: Prisma.montadorasCountArgs<ExtArgs>
            result: $Utils.Optional<MontadorasCountAggregateOutputType> | number
          }
        }
      }
      produto_fotos: {
        payload: Prisma.$produto_fotosPayload<ExtArgs>
        fields: Prisma.produto_fotosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produto_fotosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produto_fotosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>
          }
          findFirst: {
            args: Prisma.produto_fotosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produto_fotosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>
          }
          findMany: {
            args: Prisma.produto_fotosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>[]
          }
          create: {
            args: Prisma.produto_fotosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>
          }
          createMany: {
            args: Prisma.produto_fotosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produto_fotosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>[]
          }
          delete: {
            args: Prisma.produto_fotosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>
          }
          update: {
            args: Prisma.produto_fotosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>
          }
          deleteMany: {
            args: Prisma.produto_fotosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produto_fotosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produto_fotosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>[]
          }
          upsert: {
            args: Prisma.produto_fotosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produto_fotosPayload>
          }
          aggregate: {
            args: Prisma.Produto_fotosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto_fotos>
          }
          groupBy: {
            args: Prisma.produto_fotosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Produto_fotosGroupByOutputType>[]
          }
          count: {
            args: Prisma.produto_fotosCountArgs<ExtArgs>
            result: $Utils.Optional<Produto_fotosCountAggregateOutputType> | number
          }
        }
      }
      produtos: {
        payload: Prisma.$produtosPayload<ExtArgs>
        fields: Prisma.produtosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produtosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produtosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findFirst: {
            args: Prisma.produtosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produtosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          findMany: {
            args: Prisma.produtosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          create: {
            args: Prisma.produtosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          createMany: {
            args: Prisma.produtosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produtosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          delete: {
            args: Prisma.produtosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          update: {
            args: Prisma.produtosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          deleteMany: {
            args: Prisma.produtosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produtosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produtosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>[]
          }
          upsert: {
            args: Prisma.produtosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produtosPayload>
          }
          aggregate: {
            args: Prisma.ProdutosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutos>
          }
          groupBy: {
            args: Prisma.produtosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutosGroupByOutputType>[]
          }
          count: {
            args: Prisma.produtosCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutosCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      videos: {
        payload: Prisma.$videosPayload<ExtArgs>
        fields: Prisma.videosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findFirst: {
            args: Prisma.videosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findMany: {
            args: Prisma.videosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          create: {
            args: Prisma.videosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          createMany: {
            args: Prisma.videosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          delete: {
            args: Prisma.videosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          update: {
            args: Prisma.videosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          deleteMany: {
            args: Prisma.videosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          upsert: {
            args: Prisma.videosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          aggregate: {
            args: Prisma.VideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos>
          }
          groupBy: {
            args: Prisma.videosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.videosCountArgs<ExtArgs>
            result: $Utils.Optional<VideosCountAggregateOutputType> | number
          }
        }
      }
      videos_assistidos: {
        payload: Prisma.$videos_assistidosPayload<ExtArgs>
        fields: Prisma.videos_assistidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videos_assistidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videos_assistidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>
          }
          findFirst: {
            args: Prisma.videos_assistidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videos_assistidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>
          }
          findMany: {
            args: Prisma.videos_assistidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>[]
          }
          create: {
            args: Prisma.videos_assistidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>
          }
          createMany: {
            args: Prisma.videos_assistidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videos_assistidosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>[]
          }
          delete: {
            args: Prisma.videos_assistidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>
          }
          update: {
            args: Prisma.videos_assistidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>
          }
          deleteMany: {
            args: Prisma.videos_assistidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videos_assistidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videos_assistidosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>[]
          }
          upsert: {
            args: Prisma.videos_assistidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_assistidosPayload>
          }
          aggregate: {
            args: Prisma.Videos_assistidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos_assistidos>
          }
          groupBy: {
            args: Prisma.videos_assistidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Videos_assistidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.videos_assistidosCountArgs<ExtArgs>
            result: $Utils.Optional<Videos_assistidosCountAggregateOutputType> | number
          }
        }
      }
      videos_instalador: {
        payload: Prisma.$videos_instaladorPayload<ExtArgs>
        fields: Prisma.videos_instaladorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videos_instaladorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videos_instaladorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>
          }
          findFirst: {
            args: Prisma.videos_instaladorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videos_instaladorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>
          }
          findMany: {
            args: Prisma.videos_instaladorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>[]
          }
          create: {
            args: Prisma.videos_instaladorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>
          }
          createMany: {
            args: Prisma.videos_instaladorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.videos_instaladorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>[]
          }
          delete: {
            args: Prisma.videos_instaladorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>
          }
          update: {
            args: Prisma.videos_instaladorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>
          }
          deleteMany: {
            args: Prisma.videos_instaladorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videos_instaladorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.videos_instaladorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>[]
          }
          upsert: {
            args: Prisma.videos_instaladorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videos_instaladorPayload>
          }
          aggregate: {
            args: Prisma.Videos_instaladorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos_instalador>
          }
          groupBy: {
            args: Prisma.videos_instaladorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Videos_instaladorGroupByOutputType>[]
          }
          count: {
            args: Prisma.videos_instaladorCountArgs<ExtArgs>
            result: $Utils.Optional<Videos_instaladorCountAggregateOutputType> | number
          }
        }
      }
      carro_produtos: {
        payload: Prisma.$carro_produtosPayload<ExtArgs>
        fields: Prisma.carro_produtosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carro_produtosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carro_produtosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>
          }
          findFirst: {
            args: Prisma.carro_produtosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carro_produtosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>
          }
          findMany: {
            args: Prisma.carro_produtosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>[]
          }
          create: {
            args: Prisma.carro_produtosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>
          }
          createMany: {
            args: Prisma.carro_produtosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carro_produtosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>[]
          }
          delete: {
            args: Prisma.carro_produtosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>
          }
          update: {
            args: Prisma.carro_produtosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>
          }
          deleteMany: {
            args: Prisma.carro_produtosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carro_produtosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carro_produtosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>[]
          }
          upsert: {
            args: Prisma.carro_produtosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carro_produtosPayload>
          }
          aggregate: {
            args: Prisma.Carro_produtosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarro_produtos>
          }
          groupBy: {
            args: Prisma.carro_produtosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Carro_produtosGroupByOutputType>[]
          }
          count: {
            args: Prisma.carro_produtosCountArgs<ExtArgs>
            result: $Utils.Optional<Carro_produtosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    carros?: carrosOmit
    categorias?: categoriasOmit
    contatos?: contatosOmit
    duvidas?: duvidasOmit
    manuais?: manuaisOmit
    montadoras?: montadorasOmit
    produto_fotos?: produto_fotosOmit
    produtos?: produtosOmit
    usuarios?: usuariosOmit
    videos?: videosOmit
    videos_assistidos?: videos_assistidosOmit
    videos_instalador?: videos_instaladorOmit
    carro_produtos?: carro_produtosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CarrosCountOutputType
   */

  export type CarrosCountOutputType = {
    produtos: number
  }

  export type CarrosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | CarrosCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * CarrosCountOutputType without action
   */
  export type CarrosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosCountOutputType
     */
    select?: CarrosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarrosCountOutputType without action
   */
  export type CarrosCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carro_produtosWhereInput
  }


  /**
   * Count Type MontadorasCountOutputType
   */

  export type MontadorasCountOutputType = {
    carros: number
  }

  export type MontadorasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carros?: boolean | MontadorasCountOutputTypeCountCarrosArgs
  }

  // Custom InputTypes
  /**
   * MontadorasCountOutputType without action
   */
  export type MontadorasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MontadorasCountOutputType
     */
    select?: MontadorasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MontadorasCountOutputType without action
   */
  export type MontadorasCountOutputTypeCountCarrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrosWhereInput
  }


  /**
   * Count Type ProdutosCountOutputType
   */

  export type ProdutosCountOutputType = {
    carros: number
  }

  export type ProdutosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carros?: boolean | ProdutosCountOutputTypeCountCarrosArgs
  }

  // Custom InputTypes
  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutosCountOutputType
     */
    select?: ProdutosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutosCountOutputType without action
   */
  export type ProdutosCountOutputTypeCountCarrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carro_produtosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model carros
   */

  export type AggregateCarros = {
    _count: CarrosCountAggregateOutputType | null
    _avg: CarrosAvgAggregateOutputType | null
    _sum: CarrosSumAggregateOutputType | null
    _min: CarrosMinAggregateOutputType | null
    _max: CarrosMaxAggregateOutputType | null
  }

  export type CarrosAvgAggregateOutputType = {
    id: number | null
    ano_de: number | null
    ano_ate: number | null
    montadora_id: number | null
  }

  export type CarrosSumAggregateOutputType = {
    id: bigint | null
    ano_de: bigint | null
    ano_ate: bigint | null
    montadora_id: bigint | null
  }

  export type CarrosMinAggregateOutputType = {
    id: bigint | null
    nome: string | null
    ano_de: bigint | null
    ano_ate: bigint | null
    versao: string | null
    montadora_id: bigint | null
    foto_url: string | null
    imagem: string | null
  }

  export type CarrosMaxAggregateOutputType = {
    id: bigint | null
    nome: string | null
    ano_de: bigint | null
    ano_ate: bigint | null
    versao: string | null
    montadora_id: bigint | null
    foto_url: string | null
    imagem: string | null
  }

  export type CarrosCountAggregateOutputType = {
    id: number
    nome: number
    ano_de: number
    ano_ate: number
    versao: number
    montadora_id: number
    foto_url: number
    imagem: number
    _all: number
  }


  export type CarrosAvgAggregateInputType = {
    id?: true
    ano_de?: true
    ano_ate?: true
    montadora_id?: true
  }

  export type CarrosSumAggregateInputType = {
    id?: true
    ano_de?: true
    ano_ate?: true
    montadora_id?: true
  }

  export type CarrosMinAggregateInputType = {
    id?: true
    nome?: true
    ano_de?: true
    ano_ate?: true
    versao?: true
    montadora_id?: true
    foto_url?: true
    imagem?: true
  }

  export type CarrosMaxAggregateInputType = {
    id?: true
    nome?: true
    ano_de?: true
    ano_ate?: true
    versao?: true
    montadora_id?: true
    foto_url?: true
    imagem?: true
  }

  export type CarrosCountAggregateInputType = {
    id?: true
    nome?: true
    ano_de?: true
    ano_ate?: true
    versao?: true
    montadora_id?: true
    foto_url?: true
    imagem?: true
    _all?: true
  }

  export type CarrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carros to aggregate.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carros
    **/
    _count?: true | CarrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrosMaxAggregateInputType
  }

  export type GetCarrosAggregateType<T extends CarrosAggregateArgs> = {
        [P in keyof T & keyof AggregateCarros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarros[P]>
      : GetScalarType<T[P], AggregateCarros[P]>
  }




  export type carrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrosWhereInput
    orderBy?: carrosOrderByWithAggregationInput | carrosOrderByWithAggregationInput[]
    by: CarrosScalarFieldEnum[] | CarrosScalarFieldEnum
    having?: carrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrosCountAggregateInputType | true
    _avg?: CarrosAvgAggregateInputType
    _sum?: CarrosSumAggregateInputType
    _min?: CarrosMinAggregateInputType
    _max?: CarrosMaxAggregateInputType
  }

  export type CarrosGroupByOutputType = {
    id: bigint
    nome: string | null
    ano_de: bigint | null
    ano_ate: bigint | null
    versao: string | null
    montadora_id: bigint | null
    foto_url: string | null
    imagem: string | null
    _count: CarrosCountAggregateOutputType | null
    _avg: CarrosAvgAggregateOutputType | null
    _sum: CarrosSumAggregateOutputType | null
    _min: CarrosMinAggregateOutputType | null
    _max: CarrosMaxAggregateOutputType | null
  }

  type GetCarrosGroupByPayload<T extends carrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrosGroupByOutputType[P]>
            : GetScalarType<T[P], CarrosGroupByOutputType[P]>
        }
      >
    >


  export type carrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ano_de?: boolean
    ano_ate?: boolean
    versao?: boolean
    montadora_id?: boolean
    foto_url?: boolean
    imagem?: boolean
    montadora?: boolean | carros$montadoraArgs<ExtArgs>
    produtos?: boolean | carros$produtosArgs<ExtArgs>
    _count?: boolean | CarrosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carros"]>

  export type carrosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ano_de?: boolean
    ano_ate?: boolean
    versao?: boolean
    montadora_id?: boolean
    foto_url?: boolean
    imagem?: boolean
    montadora?: boolean | carros$montadoraArgs<ExtArgs>
  }, ExtArgs["result"]["carros"]>

  export type carrosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ano_de?: boolean
    ano_ate?: boolean
    versao?: boolean
    montadora_id?: boolean
    foto_url?: boolean
    imagem?: boolean
    montadora?: boolean | carros$montadoraArgs<ExtArgs>
  }, ExtArgs["result"]["carros"]>

  export type carrosSelectScalar = {
    id?: boolean
    nome?: boolean
    ano_de?: boolean
    ano_ate?: boolean
    versao?: boolean
    montadora_id?: boolean
    foto_url?: boolean
    imagem?: boolean
  }

  export type carrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ano_de" | "ano_ate" | "versao" | "montadora_id" | "foto_url" | "imagem", ExtArgs["result"]["carros"]>
  export type carrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    montadora?: boolean | carros$montadoraArgs<ExtArgs>
    produtos?: boolean | carros$produtosArgs<ExtArgs>
    _count?: boolean | CarrosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type carrosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    montadora?: boolean | carros$montadoraArgs<ExtArgs>
  }
  export type carrosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    montadora?: boolean | carros$montadoraArgs<ExtArgs>
  }

  export type $carrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carros"
    objects: {
      montadora: Prisma.$montadorasPayload<ExtArgs> | null
      produtos: Prisma.$carro_produtosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nome: string | null
      ano_de: bigint | null
      ano_ate: bigint | null
      versao: string | null
      montadora_id: bigint | null
      foto_url: string | null
      imagem: string | null
    }, ExtArgs["result"]["carros"]>
    composites: {}
  }

  type carrosGetPayload<S extends boolean | null | undefined | carrosDefaultArgs> = $Result.GetResult<Prisma.$carrosPayload, S>

  type carrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrosCountAggregateInputType | true
    }

  export interface carrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carros'], meta: { name: 'carros' } }
    /**
     * Find zero or one Carros that matches the filter.
     * @param {carrosFindUniqueArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carrosFindUniqueArgs>(args: SelectSubset<T, carrosFindUniqueArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carrosFindUniqueOrThrowArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carrosFindUniqueOrThrowArgs>(args: SelectSubset<T, carrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosFindFirstArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carrosFindFirstArgs>(args?: SelectSubset<T, carrosFindFirstArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosFindFirstOrThrowArgs} args - Arguments to find a Carros
     * @example
     * // Get one Carros
     * const carros = await prisma.carros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carrosFindFirstOrThrowArgs>(args?: SelectSubset<T, carrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carros
     * const carros = await prisma.carros.findMany()
     * 
     * // Get first 10 Carros
     * const carros = await prisma.carros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrosWithIdOnly = await prisma.carros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carrosFindManyArgs>(args?: SelectSubset<T, carrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carros.
     * @param {carrosCreateArgs} args - Arguments to create a Carros.
     * @example
     * // Create one Carros
     * const Carros = await prisma.carros.create({
     *   data: {
     *     // ... data to create a Carros
     *   }
     * })
     * 
     */
    create<T extends carrosCreateArgs>(args: SelectSubset<T, carrosCreateArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carros.
     * @param {carrosCreateManyArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carros = await prisma.carros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carrosCreateManyArgs>(args?: SelectSubset<T, carrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carros and returns the data saved in the database.
     * @param {carrosCreateManyAndReturnArgs} args - Arguments to create many Carros.
     * @example
     * // Create many Carros
     * const carros = await prisma.carros.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carros and only return the `id`
     * const carrosWithIdOnly = await prisma.carros.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carrosCreateManyAndReturnArgs>(args?: SelectSubset<T, carrosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carros.
     * @param {carrosDeleteArgs} args - Arguments to delete one Carros.
     * @example
     * // Delete one Carros
     * const Carros = await prisma.carros.delete({
     *   where: {
     *     // ... filter to delete one Carros
     *   }
     * })
     * 
     */
    delete<T extends carrosDeleteArgs>(args: SelectSubset<T, carrosDeleteArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carros.
     * @param {carrosUpdateArgs} args - Arguments to update one Carros.
     * @example
     * // Update one Carros
     * const carros = await prisma.carros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carrosUpdateArgs>(args: SelectSubset<T, carrosUpdateArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carros.
     * @param {carrosDeleteManyArgs} args - Arguments to filter Carros to delete.
     * @example
     * // Delete a few Carros
     * const { count } = await prisma.carros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carrosDeleteManyArgs>(args?: SelectSubset<T, carrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carros
     * const carros = await prisma.carros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carrosUpdateManyArgs>(args: SelectSubset<T, carrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carros and returns the data updated in the database.
     * @param {carrosUpdateManyAndReturnArgs} args - Arguments to update many Carros.
     * @example
     * // Update many Carros
     * const carros = await prisma.carros.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carros and only return the `id`
     * const carrosWithIdOnly = await prisma.carros.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carrosUpdateManyAndReturnArgs>(args: SelectSubset<T, carrosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carros.
     * @param {carrosUpsertArgs} args - Arguments to update or create a Carros.
     * @example
     * // Update or create a Carros
     * const carros = await prisma.carros.upsert({
     *   create: {
     *     // ... data to create a Carros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carros we want to update
     *   }
     * })
     */
    upsert<T extends carrosUpsertArgs>(args: SelectSubset<T, carrosUpsertArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosCountArgs} args - Arguments to filter Carros to count.
     * @example
     * // Count the number of Carros
     * const count = await prisma.carros.count({
     *   where: {
     *     // ... the filter for the Carros we want to count
     *   }
     * })
    **/
    count<T extends carrosCountArgs>(
      args?: Subset<T, carrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarrosAggregateArgs>(args: Subset<T, CarrosAggregateArgs>): Prisma.PrismaPromise<GetCarrosAggregateType<T>>

    /**
     * Group by Carros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrosGroupByArgs} args - Group by arguments.
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
      T extends carrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carrosGroupByArgs['orderBy'] }
        : { orderBy?: carrosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carros model
   */
  readonly fields: carrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    montadora<T extends carros$montadoraArgs<ExtArgs> = {}>(args?: Subset<T, carros$montadoraArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produtos<T extends carros$produtosArgs<ExtArgs> = {}>(args?: Subset<T, carros$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the carros model
   */
  interface carrosFieldRefs {
    readonly id: FieldRef<"carros", 'BigInt'>
    readonly nome: FieldRef<"carros", 'String'>
    readonly ano_de: FieldRef<"carros", 'BigInt'>
    readonly ano_ate: FieldRef<"carros", 'BigInt'>
    readonly versao: FieldRef<"carros", 'String'>
    readonly montadora_id: FieldRef<"carros", 'BigInt'>
    readonly foto_url: FieldRef<"carros", 'String'>
    readonly imagem: FieldRef<"carros", 'String'>
  }
    

  // Custom InputTypes
  /**
   * carros findUnique
   */
  export type carrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros findUniqueOrThrow
   */
  export type carrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros findFirst
   */
  export type carrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carros.
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carros.
     */
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * carros findFirstOrThrow
   */
  export type carrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carros.
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carros.
     */
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * carros findMany
   */
  export type carrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter, which carros to fetch.
     */
    where?: carrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carros to fetch.
     */
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carros.
     */
    cursor?: carrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carros.
     */
    skip?: number
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * carros create
   */
  export type carrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * The data needed to create a carros.
     */
    data?: XOR<carrosCreateInput, carrosUncheckedCreateInput>
  }

  /**
   * carros createMany
   */
  export type carrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carros.
     */
    data: carrosCreateManyInput | carrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carros createManyAndReturn
   */
  export type carrosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * The data used to create many carros.
     */
    data: carrosCreateManyInput | carrosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carros update
   */
  export type carrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * The data needed to update a carros.
     */
    data: XOR<carrosUpdateInput, carrosUncheckedUpdateInput>
    /**
     * Choose, which carros to update.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros updateMany
   */
  export type carrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carros.
     */
    data: XOR<carrosUpdateManyMutationInput, carrosUncheckedUpdateManyInput>
    /**
     * Filter which carros to update
     */
    where?: carrosWhereInput
    /**
     * Limit how many carros to update.
     */
    limit?: number
  }

  /**
   * carros updateManyAndReturn
   */
  export type carrosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * The data used to update carros.
     */
    data: XOR<carrosUpdateManyMutationInput, carrosUncheckedUpdateManyInput>
    /**
     * Filter which carros to update
     */
    where?: carrosWhereInput
    /**
     * Limit how many carros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carros upsert
   */
  export type carrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * The filter to search for the carros to update in case it exists.
     */
    where: carrosWhereUniqueInput
    /**
     * In case the carros found by the `where` argument doesn't exist, create a new carros with this data.
     */
    create: XOR<carrosCreateInput, carrosUncheckedCreateInput>
    /**
     * In case the carros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carrosUpdateInput, carrosUncheckedUpdateInput>
  }

  /**
   * carros delete
   */
  export type carrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    /**
     * Filter which carros to delete.
     */
    where: carrosWhereUniqueInput
  }

  /**
   * carros deleteMany
   */
  export type carrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carros to delete
     */
    where?: carrosWhereInput
    /**
     * Limit how many carros to delete.
     */
    limit?: number
  }

  /**
   * carros.montadora
   */
  export type carros$montadoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    where?: montadorasWhereInput
  }

  /**
   * carros.produtos
   */
  export type carros$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    where?: carro_produtosWhereInput
    orderBy?: carro_produtosOrderByWithRelationInput | carro_produtosOrderByWithRelationInput[]
    cursor?: carro_produtosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Carro_produtosScalarFieldEnum | Carro_produtosScalarFieldEnum[]
  }

  /**
   * carros without action
   */
  export type carrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
  }


  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id: bigint | null
  }

  export type CategoriasMinAggregateOutputType = {
    id: bigint | null
    nome: string | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id: bigint | null
    nome: string | null
  }

  export type CategoriasCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id?: true
  }

  export type CategoriasSumAggregateInputType = {
    id?: true
  }

  export type CategoriasMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriasCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id: bigint
    nome: string | null
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["categorias"]>

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nome: string | null
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriasWithIdOnly = await prisma.categorias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriasWithIdOnly = await prisma.categorias.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id: FieldRef<"categorias", 'BigInt'>
    readonly nome: FieldRef<"categorias", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data?: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias createManyAndReturn
   */
  export type categoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias updateManyAndReturn
   */
  export type categoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
  }


  /**
   * Model contatos
   */

  export type AggregateContatos = {
    _count: ContatosCountAggregateOutputType | null
    _avg: ContatosAvgAggregateOutputType | null
    _sum: ContatosSumAggregateOutputType | null
    _min: ContatosMinAggregateOutputType | null
    _max: ContatosMaxAggregateOutputType | null
  }

  export type ContatosAvgAggregateOutputType = {
    id: number | null
  }

  export type ContatosSumAggregateOutputType = {
    id: bigint | null
  }

  export type ContatosMinAggregateOutputType = {
    id: bigint | null
    departamento: string | null
    colaborador: string | null
    telefone: string | null
    ramal: string | null
    email: string | null
  }

  export type ContatosMaxAggregateOutputType = {
    id: bigint | null
    departamento: string | null
    colaborador: string | null
    telefone: string | null
    ramal: string | null
    email: string | null
  }

  export type ContatosCountAggregateOutputType = {
    id: number
    departamento: number
    colaborador: number
    telefone: number
    ramal: number
    email: number
    _all: number
  }


  export type ContatosAvgAggregateInputType = {
    id?: true
  }

  export type ContatosSumAggregateInputType = {
    id?: true
  }

  export type ContatosMinAggregateInputType = {
    id?: true
    departamento?: true
    colaborador?: true
    telefone?: true
    ramal?: true
    email?: true
  }

  export type ContatosMaxAggregateInputType = {
    id?: true
    departamento?: true
    colaborador?: true
    telefone?: true
    ramal?: true
    email?: true
  }

  export type ContatosCountAggregateInputType = {
    id?: true
    departamento?: true
    colaborador?: true
    telefone?: true
    ramal?: true
    email?: true
    _all?: true
  }

  export type ContatosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contatos to aggregate.
     */
    where?: contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos to fetch.
     */
    orderBy?: contatosOrderByWithRelationInput | contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contatos
    **/
    _count?: true | ContatosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContatosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContatosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContatosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContatosMaxAggregateInputType
  }

  export type GetContatosAggregateType<T extends ContatosAggregateArgs> = {
        [P in keyof T & keyof AggregateContatos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContatos[P]>
      : GetScalarType<T[P], AggregateContatos[P]>
  }




  export type contatosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contatosWhereInput
    orderBy?: contatosOrderByWithAggregationInput | contatosOrderByWithAggregationInput[]
    by: ContatosScalarFieldEnum[] | ContatosScalarFieldEnum
    having?: contatosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContatosCountAggregateInputType | true
    _avg?: ContatosAvgAggregateInputType
    _sum?: ContatosSumAggregateInputType
    _min?: ContatosMinAggregateInputType
    _max?: ContatosMaxAggregateInputType
  }

  export type ContatosGroupByOutputType = {
    id: bigint
    departamento: string | null
    colaborador: string | null
    telefone: string | null
    ramal: string | null
    email: string | null
    _count: ContatosCountAggregateOutputType | null
    _avg: ContatosAvgAggregateOutputType | null
    _sum: ContatosSumAggregateOutputType | null
    _min: ContatosMinAggregateOutputType | null
    _max: ContatosMaxAggregateOutputType | null
  }

  type GetContatosGroupByPayload<T extends contatosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContatosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContatosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContatosGroupByOutputType[P]>
            : GetScalarType<T[P], ContatosGroupByOutputType[P]>
        }
      >
    >


  export type contatosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departamento?: boolean
    colaborador?: boolean
    telefone?: boolean
    ramal?: boolean
    email?: boolean
  }, ExtArgs["result"]["contatos"]>

  export type contatosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departamento?: boolean
    colaborador?: boolean
    telefone?: boolean
    ramal?: boolean
    email?: boolean
  }, ExtArgs["result"]["contatos"]>

  export type contatosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departamento?: boolean
    colaborador?: boolean
    telefone?: boolean
    ramal?: boolean
    email?: boolean
  }, ExtArgs["result"]["contatos"]>

  export type contatosSelectScalar = {
    id?: boolean
    departamento?: boolean
    colaborador?: boolean
    telefone?: boolean
    ramal?: boolean
    email?: boolean
  }

  export type contatosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departamento" | "colaborador" | "telefone" | "ramal" | "email", ExtArgs["result"]["contatos"]>

  export type $contatosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contatos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      departamento: string | null
      colaborador: string | null
      telefone: string | null
      ramal: string | null
      email: string | null
    }, ExtArgs["result"]["contatos"]>
    composites: {}
  }

  type contatosGetPayload<S extends boolean | null | undefined | contatosDefaultArgs> = $Result.GetResult<Prisma.$contatosPayload, S>

  type contatosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contatosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContatosCountAggregateInputType | true
    }

  export interface contatosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contatos'], meta: { name: 'contatos' } }
    /**
     * Find zero or one Contatos that matches the filter.
     * @param {contatosFindUniqueArgs} args - Arguments to find a Contatos
     * @example
     * // Get one Contatos
     * const contatos = await prisma.contatos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contatosFindUniqueArgs>(args: SelectSubset<T, contatosFindUniqueArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contatos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contatosFindUniqueOrThrowArgs} args - Arguments to find a Contatos
     * @example
     * // Get one Contatos
     * const contatos = await prisma.contatos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contatosFindUniqueOrThrowArgs>(args: SelectSubset<T, contatosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contatos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatosFindFirstArgs} args - Arguments to find a Contatos
     * @example
     * // Get one Contatos
     * const contatos = await prisma.contatos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contatosFindFirstArgs>(args?: SelectSubset<T, contatosFindFirstArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contatos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatosFindFirstOrThrowArgs} args - Arguments to find a Contatos
     * @example
     * // Get one Contatos
     * const contatos = await prisma.contatos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contatosFindFirstOrThrowArgs>(args?: SelectSubset<T, contatosFindFirstOrThrowArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contatos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contatos
     * const contatos = await prisma.contatos.findMany()
     * 
     * // Get first 10 Contatos
     * const contatos = await prisma.contatos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contatosWithIdOnly = await prisma.contatos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contatosFindManyArgs>(args?: SelectSubset<T, contatosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contatos.
     * @param {contatosCreateArgs} args - Arguments to create a Contatos.
     * @example
     * // Create one Contatos
     * const Contatos = await prisma.contatos.create({
     *   data: {
     *     // ... data to create a Contatos
     *   }
     * })
     * 
     */
    create<T extends contatosCreateArgs>(args: SelectSubset<T, contatosCreateArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contatos.
     * @param {contatosCreateManyArgs} args - Arguments to create many Contatos.
     * @example
     * // Create many Contatos
     * const contatos = await prisma.contatos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contatosCreateManyArgs>(args?: SelectSubset<T, contatosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contatos and returns the data saved in the database.
     * @param {contatosCreateManyAndReturnArgs} args - Arguments to create many Contatos.
     * @example
     * // Create many Contatos
     * const contatos = await prisma.contatos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contatos and only return the `id`
     * const contatosWithIdOnly = await prisma.contatos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contatosCreateManyAndReturnArgs>(args?: SelectSubset<T, contatosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contatos.
     * @param {contatosDeleteArgs} args - Arguments to delete one Contatos.
     * @example
     * // Delete one Contatos
     * const Contatos = await prisma.contatos.delete({
     *   where: {
     *     // ... filter to delete one Contatos
     *   }
     * })
     * 
     */
    delete<T extends contatosDeleteArgs>(args: SelectSubset<T, contatosDeleteArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contatos.
     * @param {contatosUpdateArgs} args - Arguments to update one Contatos.
     * @example
     * // Update one Contatos
     * const contatos = await prisma.contatos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contatosUpdateArgs>(args: SelectSubset<T, contatosUpdateArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contatos.
     * @param {contatosDeleteManyArgs} args - Arguments to filter Contatos to delete.
     * @example
     * // Delete a few Contatos
     * const { count } = await prisma.contatos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contatosDeleteManyArgs>(args?: SelectSubset<T, contatosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contatos
     * const contatos = await prisma.contatos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contatosUpdateManyArgs>(args: SelectSubset<T, contatosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contatos and returns the data updated in the database.
     * @param {contatosUpdateManyAndReturnArgs} args - Arguments to update many Contatos.
     * @example
     * // Update many Contatos
     * const contatos = await prisma.contatos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contatos and only return the `id`
     * const contatosWithIdOnly = await prisma.contatos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contatosUpdateManyAndReturnArgs>(args: SelectSubset<T, contatosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contatos.
     * @param {contatosUpsertArgs} args - Arguments to update or create a Contatos.
     * @example
     * // Update or create a Contatos
     * const contatos = await prisma.contatos.upsert({
     *   create: {
     *     // ... data to create a Contatos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contatos we want to update
     *   }
     * })
     */
    upsert<T extends contatosUpsertArgs>(args: SelectSubset<T, contatosUpsertArgs<ExtArgs>>): Prisma__contatosClient<$Result.GetResult<Prisma.$contatosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatosCountArgs} args - Arguments to filter Contatos to count.
     * @example
     * // Count the number of Contatos
     * const count = await prisma.contatos.count({
     *   where: {
     *     // ... the filter for the Contatos we want to count
     *   }
     * })
    **/
    count<T extends contatosCountArgs>(
      args?: Subset<T, contatosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContatosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContatosAggregateArgs>(args: Subset<T, ContatosAggregateArgs>): Prisma.PrismaPromise<GetContatosAggregateType<T>>

    /**
     * Group by Contatos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contatosGroupByArgs} args - Group by arguments.
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
      T extends contatosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contatosGroupByArgs['orderBy'] }
        : { orderBy?: contatosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contatosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contatos model
   */
  readonly fields: contatosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contatos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contatosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the contatos model
   */
  interface contatosFieldRefs {
    readonly id: FieldRef<"contatos", 'BigInt'>
    readonly departamento: FieldRef<"contatos", 'String'>
    readonly colaborador: FieldRef<"contatos", 'String'>
    readonly telefone: FieldRef<"contatos", 'String'>
    readonly ramal: FieldRef<"contatos", 'String'>
    readonly email: FieldRef<"contatos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contatos findUnique
   */
  export type contatosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * Filter, which contatos to fetch.
     */
    where: contatosWhereUniqueInput
  }

  /**
   * contatos findUniqueOrThrow
   */
  export type contatosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * Filter, which contatos to fetch.
     */
    where: contatosWhereUniqueInput
  }

  /**
   * contatos findFirst
   */
  export type contatosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * Filter, which contatos to fetch.
     */
    where?: contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos to fetch.
     */
    orderBy?: contatosOrderByWithRelationInput | contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contatos.
     */
    cursor?: contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contatos.
     */
    distinct?: ContatosScalarFieldEnum | ContatosScalarFieldEnum[]
  }

  /**
   * contatos findFirstOrThrow
   */
  export type contatosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * Filter, which contatos to fetch.
     */
    where?: contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos to fetch.
     */
    orderBy?: contatosOrderByWithRelationInput | contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contatos.
     */
    cursor?: contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contatos.
     */
    distinct?: ContatosScalarFieldEnum | ContatosScalarFieldEnum[]
  }

  /**
   * contatos findMany
   */
  export type contatosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * Filter, which contatos to fetch.
     */
    where?: contatosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contatos to fetch.
     */
    orderBy?: contatosOrderByWithRelationInput | contatosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contatos.
     */
    cursor?: contatosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contatos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contatos.
     */
    skip?: number
    distinct?: ContatosScalarFieldEnum | ContatosScalarFieldEnum[]
  }

  /**
   * contatos create
   */
  export type contatosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * The data needed to create a contatos.
     */
    data?: XOR<contatosCreateInput, contatosUncheckedCreateInput>
  }

  /**
   * contatos createMany
   */
  export type contatosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contatos.
     */
    data: contatosCreateManyInput | contatosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contatos createManyAndReturn
   */
  export type contatosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * The data used to create many contatos.
     */
    data: contatosCreateManyInput | contatosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contatos update
   */
  export type contatosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * The data needed to update a contatos.
     */
    data: XOR<contatosUpdateInput, contatosUncheckedUpdateInput>
    /**
     * Choose, which contatos to update.
     */
    where: contatosWhereUniqueInput
  }

  /**
   * contatos updateMany
   */
  export type contatosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contatos.
     */
    data: XOR<contatosUpdateManyMutationInput, contatosUncheckedUpdateManyInput>
    /**
     * Filter which contatos to update
     */
    where?: contatosWhereInput
    /**
     * Limit how many contatos to update.
     */
    limit?: number
  }

  /**
   * contatos updateManyAndReturn
   */
  export type contatosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * The data used to update contatos.
     */
    data: XOR<contatosUpdateManyMutationInput, contatosUncheckedUpdateManyInput>
    /**
     * Filter which contatos to update
     */
    where?: contatosWhereInput
    /**
     * Limit how many contatos to update.
     */
    limit?: number
  }

  /**
   * contatos upsert
   */
  export type contatosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * The filter to search for the contatos to update in case it exists.
     */
    where: contatosWhereUniqueInput
    /**
     * In case the contatos found by the `where` argument doesn't exist, create a new contatos with this data.
     */
    create: XOR<contatosCreateInput, contatosUncheckedCreateInput>
    /**
     * In case the contatos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contatosUpdateInput, contatosUncheckedUpdateInput>
  }

  /**
   * contatos delete
   */
  export type contatosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
    /**
     * Filter which contatos to delete.
     */
    where: contatosWhereUniqueInput
  }

  /**
   * contatos deleteMany
   */
  export type contatosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contatos to delete
     */
    where?: contatosWhereInput
    /**
     * Limit how many contatos to delete.
     */
    limit?: number
  }

  /**
   * contatos without action
   */
  export type contatosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contatos
     */
    select?: contatosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contatos
     */
    omit?: contatosOmit<ExtArgs> | null
  }


  /**
   * Model duvidas
   */

  export type AggregateDuvidas = {
    _count: DuvidasCountAggregateOutputType | null
    _avg: DuvidasAvgAggregateOutputType | null
    _sum: DuvidasSumAggregateOutputType | null
    _min: DuvidasMinAggregateOutputType | null
    _max: DuvidasMaxAggregateOutputType | null
  }

  export type DuvidasAvgAggregateOutputType = {
    id: number | null
    posicao: number | null
    ordem: number | null
  }

  export type DuvidasSumAggregateOutputType = {
    id: bigint | null
    posicao: bigint | null
    ordem: bigint | null
  }

  export type DuvidasMinAggregateOutputType = {
    id: bigint | null
    pergunta: string | null
    resposta: string | null
    posicao: bigint | null
    ordem: bigint | null
  }

  export type DuvidasMaxAggregateOutputType = {
    id: bigint | null
    pergunta: string | null
    resposta: string | null
    posicao: bigint | null
    ordem: bigint | null
  }

  export type DuvidasCountAggregateOutputType = {
    id: number
    pergunta: number
    resposta: number
    posicao: number
    ordem: number
    _all: number
  }


  export type DuvidasAvgAggregateInputType = {
    id?: true
    posicao?: true
    ordem?: true
  }

  export type DuvidasSumAggregateInputType = {
    id?: true
    posicao?: true
    ordem?: true
  }

  export type DuvidasMinAggregateInputType = {
    id?: true
    pergunta?: true
    resposta?: true
    posicao?: true
    ordem?: true
  }

  export type DuvidasMaxAggregateInputType = {
    id?: true
    pergunta?: true
    resposta?: true
    posicao?: true
    ordem?: true
  }

  export type DuvidasCountAggregateInputType = {
    id?: true
    pergunta?: true
    resposta?: true
    posicao?: true
    ordem?: true
    _all?: true
  }

  export type DuvidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duvidas to aggregate.
     */
    where?: duvidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duvidas to fetch.
     */
    orderBy?: duvidasOrderByWithRelationInput | duvidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: duvidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duvidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duvidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned duvidas
    **/
    _count?: true | DuvidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DuvidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DuvidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DuvidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DuvidasMaxAggregateInputType
  }

  export type GetDuvidasAggregateType<T extends DuvidasAggregateArgs> = {
        [P in keyof T & keyof AggregateDuvidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDuvidas[P]>
      : GetScalarType<T[P], AggregateDuvidas[P]>
  }




  export type duvidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: duvidasWhereInput
    orderBy?: duvidasOrderByWithAggregationInput | duvidasOrderByWithAggregationInput[]
    by: DuvidasScalarFieldEnum[] | DuvidasScalarFieldEnum
    having?: duvidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DuvidasCountAggregateInputType | true
    _avg?: DuvidasAvgAggregateInputType
    _sum?: DuvidasSumAggregateInputType
    _min?: DuvidasMinAggregateInputType
    _max?: DuvidasMaxAggregateInputType
  }

  export type DuvidasGroupByOutputType = {
    id: bigint
    pergunta: string | null
    resposta: string | null
    posicao: bigint | null
    ordem: bigint | null
    _count: DuvidasCountAggregateOutputType | null
    _avg: DuvidasAvgAggregateOutputType | null
    _sum: DuvidasSumAggregateOutputType | null
    _min: DuvidasMinAggregateOutputType | null
    _max: DuvidasMaxAggregateOutputType | null
  }

  type GetDuvidasGroupByPayload<T extends duvidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DuvidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DuvidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DuvidasGroupByOutputType[P]>
            : GetScalarType<T[P], DuvidasGroupByOutputType[P]>
        }
      >
    >


  export type duvidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pergunta?: boolean
    resposta?: boolean
    posicao?: boolean
    ordem?: boolean
  }, ExtArgs["result"]["duvidas"]>

  export type duvidasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pergunta?: boolean
    resposta?: boolean
    posicao?: boolean
    ordem?: boolean
  }, ExtArgs["result"]["duvidas"]>

  export type duvidasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pergunta?: boolean
    resposta?: boolean
    posicao?: boolean
    ordem?: boolean
  }, ExtArgs["result"]["duvidas"]>

  export type duvidasSelectScalar = {
    id?: boolean
    pergunta?: boolean
    resposta?: boolean
    posicao?: boolean
    ordem?: boolean
  }

  export type duvidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pergunta" | "resposta" | "posicao" | "ordem", ExtArgs["result"]["duvidas"]>

  export type $duvidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "duvidas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      pergunta: string | null
      resposta: string | null
      posicao: bigint | null
      ordem: bigint | null
    }, ExtArgs["result"]["duvidas"]>
    composites: {}
  }

  type duvidasGetPayload<S extends boolean | null | undefined | duvidasDefaultArgs> = $Result.GetResult<Prisma.$duvidasPayload, S>

  type duvidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<duvidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DuvidasCountAggregateInputType | true
    }

  export interface duvidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['duvidas'], meta: { name: 'duvidas' } }
    /**
     * Find zero or one Duvidas that matches the filter.
     * @param {duvidasFindUniqueArgs} args - Arguments to find a Duvidas
     * @example
     * // Get one Duvidas
     * const duvidas = await prisma.duvidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends duvidasFindUniqueArgs>(args: SelectSubset<T, duvidasFindUniqueArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Duvidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {duvidasFindUniqueOrThrowArgs} args - Arguments to find a Duvidas
     * @example
     * // Get one Duvidas
     * const duvidas = await prisma.duvidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends duvidasFindUniqueOrThrowArgs>(args: SelectSubset<T, duvidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duvidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duvidasFindFirstArgs} args - Arguments to find a Duvidas
     * @example
     * // Get one Duvidas
     * const duvidas = await prisma.duvidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends duvidasFindFirstArgs>(args?: SelectSubset<T, duvidasFindFirstArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duvidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duvidasFindFirstOrThrowArgs} args - Arguments to find a Duvidas
     * @example
     * // Get one Duvidas
     * const duvidas = await prisma.duvidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends duvidasFindFirstOrThrowArgs>(args?: SelectSubset<T, duvidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Duvidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duvidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Duvidas
     * const duvidas = await prisma.duvidas.findMany()
     * 
     * // Get first 10 Duvidas
     * const duvidas = await prisma.duvidas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const duvidasWithIdOnly = await prisma.duvidas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends duvidasFindManyArgs>(args?: SelectSubset<T, duvidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Duvidas.
     * @param {duvidasCreateArgs} args - Arguments to create a Duvidas.
     * @example
     * // Create one Duvidas
     * const Duvidas = await prisma.duvidas.create({
     *   data: {
     *     // ... data to create a Duvidas
     *   }
     * })
     * 
     */
    create<T extends duvidasCreateArgs>(args: SelectSubset<T, duvidasCreateArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Duvidas.
     * @param {duvidasCreateManyArgs} args - Arguments to create many Duvidas.
     * @example
     * // Create many Duvidas
     * const duvidas = await prisma.duvidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends duvidasCreateManyArgs>(args?: SelectSubset<T, duvidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Duvidas and returns the data saved in the database.
     * @param {duvidasCreateManyAndReturnArgs} args - Arguments to create many Duvidas.
     * @example
     * // Create many Duvidas
     * const duvidas = await prisma.duvidas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Duvidas and only return the `id`
     * const duvidasWithIdOnly = await prisma.duvidas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends duvidasCreateManyAndReturnArgs>(args?: SelectSubset<T, duvidasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Duvidas.
     * @param {duvidasDeleteArgs} args - Arguments to delete one Duvidas.
     * @example
     * // Delete one Duvidas
     * const Duvidas = await prisma.duvidas.delete({
     *   where: {
     *     // ... filter to delete one Duvidas
     *   }
     * })
     * 
     */
    delete<T extends duvidasDeleteArgs>(args: SelectSubset<T, duvidasDeleteArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Duvidas.
     * @param {duvidasUpdateArgs} args - Arguments to update one Duvidas.
     * @example
     * // Update one Duvidas
     * const duvidas = await prisma.duvidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends duvidasUpdateArgs>(args: SelectSubset<T, duvidasUpdateArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Duvidas.
     * @param {duvidasDeleteManyArgs} args - Arguments to filter Duvidas to delete.
     * @example
     * // Delete a few Duvidas
     * const { count } = await prisma.duvidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends duvidasDeleteManyArgs>(args?: SelectSubset<T, duvidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Duvidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duvidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Duvidas
     * const duvidas = await prisma.duvidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends duvidasUpdateManyArgs>(args: SelectSubset<T, duvidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Duvidas and returns the data updated in the database.
     * @param {duvidasUpdateManyAndReturnArgs} args - Arguments to update many Duvidas.
     * @example
     * // Update many Duvidas
     * const duvidas = await prisma.duvidas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Duvidas and only return the `id`
     * const duvidasWithIdOnly = await prisma.duvidas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends duvidasUpdateManyAndReturnArgs>(args: SelectSubset<T, duvidasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Duvidas.
     * @param {duvidasUpsertArgs} args - Arguments to update or create a Duvidas.
     * @example
     * // Update or create a Duvidas
     * const duvidas = await prisma.duvidas.upsert({
     *   create: {
     *     // ... data to create a Duvidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Duvidas we want to update
     *   }
     * })
     */
    upsert<T extends duvidasUpsertArgs>(args: SelectSubset<T, duvidasUpsertArgs<ExtArgs>>): Prisma__duvidasClient<$Result.GetResult<Prisma.$duvidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Duvidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duvidasCountArgs} args - Arguments to filter Duvidas to count.
     * @example
     * // Count the number of Duvidas
     * const count = await prisma.duvidas.count({
     *   where: {
     *     // ... the filter for the Duvidas we want to count
     *   }
     * })
    **/
    count<T extends duvidasCountArgs>(
      args?: Subset<T, duvidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DuvidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Duvidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuvidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DuvidasAggregateArgs>(args: Subset<T, DuvidasAggregateArgs>): Prisma.PrismaPromise<GetDuvidasAggregateType<T>>

    /**
     * Group by Duvidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {duvidasGroupByArgs} args - Group by arguments.
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
      T extends duvidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: duvidasGroupByArgs['orderBy'] }
        : { orderBy?: duvidasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, duvidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDuvidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the duvidas model
   */
  readonly fields: duvidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for duvidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__duvidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the duvidas model
   */
  interface duvidasFieldRefs {
    readonly id: FieldRef<"duvidas", 'BigInt'>
    readonly pergunta: FieldRef<"duvidas", 'String'>
    readonly resposta: FieldRef<"duvidas", 'String'>
    readonly posicao: FieldRef<"duvidas", 'BigInt'>
    readonly ordem: FieldRef<"duvidas", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * duvidas findUnique
   */
  export type duvidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * Filter, which duvidas to fetch.
     */
    where: duvidasWhereUniqueInput
  }

  /**
   * duvidas findUniqueOrThrow
   */
  export type duvidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * Filter, which duvidas to fetch.
     */
    where: duvidasWhereUniqueInput
  }

  /**
   * duvidas findFirst
   */
  export type duvidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * Filter, which duvidas to fetch.
     */
    where?: duvidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duvidas to fetch.
     */
    orderBy?: duvidasOrderByWithRelationInput | duvidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duvidas.
     */
    cursor?: duvidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duvidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duvidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duvidas.
     */
    distinct?: DuvidasScalarFieldEnum | DuvidasScalarFieldEnum[]
  }

  /**
   * duvidas findFirstOrThrow
   */
  export type duvidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * Filter, which duvidas to fetch.
     */
    where?: duvidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duvidas to fetch.
     */
    orderBy?: duvidasOrderByWithRelationInput | duvidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for duvidas.
     */
    cursor?: duvidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duvidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duvidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of duvidas.
     */
    distinct?: DuvidasScalarFieldEnum | DuvidasScalarFieldEnum[]
  }

  /**
   * duvidas findMany
   */
  export type duvidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * Filter, which duvidas to fetch.
     */
    where?: duvidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of duvidas to fetch.
     */
    orderBy?: duvidasOrderByWithRelationInput | duvidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing duvidas.
     */
    cursor?: duvidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` duvidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` duvidas.
     */
    skip?: number
    distinct?: DuvidasScalarFieldEnum | DuvidasScalarFieldEnum[]
  }

  /**
   * duvidas create
   */
  export type duvidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * The data needed to create a duvidas.
     */
    data?: XOR<duvidasCreateInput, duvidasUncheckedCreateInput>
  }

  /**
   * duvidas createMany
   */
  export type duvidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many duvidas.
     */
    data: duvidasCreateManyInput | duvidasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * duvidas createManyAndReturn
   */
  export type duvidasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * The data used to create many duvidas.
     */
    data: duvidasCreateManyInput | duvidasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * duvidas update
   */
  export type duvidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * The data needed to update a duvidas.
     */
    data: XOR<duvidasUpdateInput, duvidasUncheckedUpdateInput>
    /**
     * Choose, which duvidas to update.
     */
    where: duvidasWhereUniqueInput
  }

  /**
   * duvidas updateMany
   */
  export type duvidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update duvidas.
     */
    data: XOR<duvidasUpdateManyMutationInput, duvidasUncheckedUpdateManyInput>
    /**
     * Filter which duvidas to update
     */
    where?: duvidasWhereInput
    /**
     * Limit how many duvidas to update.
     */
    limit?: number
  }

  /**
   * duvidas updateManyAndReturn
   */
  export type duvidasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * The data used to update duvidas.
     */
    data: XOR<duvidasUpdateManyMutationInput, duvidasUncheckedUpdateManyInput>
    /**
     * Filter which duvidas to update
     */
    where?: duvidasWhereInput
    /**
     * Limit how many duvidas to update.
     */
    limit?: number
  }

  /**
   * duvidas upsert
   */
  export type duvidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * The filter to search for the duvidas to update in case it exists.
     */
    where: duvidasWhereUniqueInput
    /**
     * In case the duvidas found by the `where` argument doesn't exist, create a new duvidas with this data.
     */
    create: XOR<duvidasCreateInput, duvidasUncheckedCreateInput>
    /**
     * In case the duvidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<duvidasUpdateInput, duvidasUncheckedUpdateInput>
  }

  /**
   * duvidas delete
   */
  export type duvidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
    /**
     * Filter which duvidas to delete.
     */
    where: duvidasWhereUniqueInput
  }

  /**
   * duvidas deleteMany
   */
  export type duvidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which duvidas to delete
     */
    where?: duvidasWhereInput
    /**
     * Limit how many duvidas to delete.
     */
    limit?: number
  }

  /**
   * duvidas without action
   */
  export type duvidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the duvidas
     */
    select?: duvidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the duvidas
     */
    omit?: duvidasOmit<ExtArgs> | null
  }


  /**
   * Model manuais
   */

  export type AggregateManuais = {
    _count: ManuaisCountAggregateOutputType | null
    _avg: ManuaisAvgAggregateOutputType | null
    _sum: ManuaisSumAggregateOutputType | null
    _min: ManuaisMinAggregateOutputType | null
    _max: ManuaisMaxAggregateOutputType | null
  }

  export type ManuaisAvgAggregateOutputType = {
    id: number | null
    ordem: number | null
    categoria_id: number | null
  }

  export type ManuaisSumAggregateOutputType = {
    id: bigint | null
    ordem: bigint | null
    categoria_id: bigint | null
  }

  export type ManuaisMinAggregateOutputType = {
    id: bigint | null
    titulo: string | null
    conteudo: string | null
    ordem: bigint | null
    categoria_id: bigint | null
    descricao: string | null
  }

  export type ManuaisMaxAggregateOutputType = {
    id: bigint | null
    titulo: string | null
    conteudo: string | null
    ordem: bigint | null
    categoria_id: bigint | null
    descricao: string | null
  }

  export type ManuaisCountAggregateOutputType = {
    id: number
    titulo: number
    conteudo: number
    ordem: number
    categoria_id: number
    descricao: number
    _all: number
  }


  export type ManuaisAvgAggregateInputType = {
    id?: true
    ordem?: true
    categoria_id?: true
  }

  export type ManuaisSumAggregateInputType = {
    id?: true
    ordem?: true
    categoria_id?: true
  }

  export type ManuaisMinAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    ordem?: true
    categoria_id?: true
    descricao?: true
  }

  export type ManuaisMaxAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    ordem?: true
    categoria_id?: true
    descricao?: true
  }

  export type ManuaisCountAggregateInputType = {
    id?: true
    titulo?: true
    conteudo?: true
    ordem?: true
    categoria_id?: true
    descricao?: true
    _all?: true
  }

  export type ManuaisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which manuais to aggregate.
     */
    where?: manuaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manuais to fetch.
     */
    orderBy?: manuaisOrderByWithRelationInput | manuaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: manuaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manuais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manuais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned manuais
    **/
    _count?: true | ManuaisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManuaisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManuaisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManuaisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManuaisMaxAggregateInputType
  }

  export type GetManuaisAggregateType<T extends ManuaisAggregateArgs> = {
        [P in keyof T & keyof AggregateManuais]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManuais[P]>
      : GetScalarType<T[P], AggregateManuais[P]>
  }




  export type manuaisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: manuaisWhereInput
    orderBy?: manuaisOrderByWithAggregationInput | manuaisOrderByWithAggregationInput[]
    by: ManuaisScalarFieldEnum[] | ManuaisScalarFieldEnum
    having?: manuaisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManuaisCountAggregateInputType | true
    _avg?: ManuaisAvgAggregateInputType
    _sum?: ManuaisSumAggregateInputType
    _min?: ManuaisMinAggregateInputType
    _max?: ManuaisMaxAggregateInputType
  }

  export type ManuaisGroupByOutputType = {
    id: bigint
    titulo: string | null
    conteudo: string | null
    ordem: bigint | null
    categoria_id: bigint | null
    descricao: string | null
    _count: ManuaisCountAggregateOutputType | null
    _avg: ManuaisAvgAggregateOutputType | null
    _sum: ManuaisSumAggregateOutputType | null
    _min: ManuaisMinAggregateOutputType | null
    _max: ManuaisMaxAggregateOutputType | null
  }

  type GetManuaisGroupByPayload<T extends manuaisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManuaisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManuaisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManuaisGroupByOutputType[P]>
            : GetScalarType<T[P], ManuaisGroupByOutputType[P]>
        }
      >
    >


  export type manuaisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    ordem?: boolean
    categoria_id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["manuais"]>

  export type manuaisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    ordem?: boolean
    categoria_id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["manuais"]>

  export type manuaisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    ordem?: boolean
    categoria_id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["manuais"]>

  export type manuaisSelectScalar = {
    id?: boolean
    titulo?: boolean
    conteudo?: boolean
    ordem?: boolean
    categoria_id?: boolean
    descricao?: boolean
  }

  export type manuaisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "conteudo" | "ordem" | "categoria_id" | "descricao", ExtArgs["result"]["manuais"]>

  export type $manuaisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "manuais"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      titulo: string | null
      conteudo: string | null
      ordem: bigint | null
      categoria_id: bigint | null
      descricao: string | null
    }, ExtArgs["result"]["manuais"]>
    composites: {}
  }

  type manuaisGetPayload<S extends boolean | null | undefined | manuaisDefaultArgs> = $Result.GetResult<Prisma.$manuaisPayload, S>

  type manuaisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<manuaisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManuaisCountAggregateInputType | true
    }

  export interface manuaisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['manuais'], meta: { name: 'manuais' } }
    /**
     * Find zero or one Manuais that matches the filter.
     * @param {manuaisFindUniqueArgs} args - Arguments to find a Manuais
     * @example
     * // Get one Manuais
     * const manuais = await prisma.manuais.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends manuaisFindUniqueArgs>(args: SelectSubset<T, manuaisFindUniqueArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manuais that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {manuaisFindUniqueOrThrowArgs} args - Arguments to find a Manuais
     * @example
     * // Get one Manuais
     * const manuais = await prisma.manuais.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends manuaisFindUniqueOrThrowArgs>(args: SelectSubset<T, manuaisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manuais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manuaisFindFirstArgs} args - Arguments to find a Manuais
     * @example
     * // Get one Manuais
     * const manuais = await prisma.manuais.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends manuaisFindFirstArgs>(args?: SelectSubset<T, manuaisFindFirstArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manuais that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manuaisFindFirstOrThrowArgs} args - Arguments to find a Manuais
     * @example
     * // Get one Manuais
     * const manuais = await prisma.manuais.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends manuaisFindFirstOrThrowArgs>(args?: SelectSubset<T, manuaisFindFirstOrThrowArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manuais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manuaisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manuais
     * const manuais = await prisma.manuais.findMany()
     * 
     * // Get first 10 Manuais
     * const manuais = await prisma.manuais.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manuaisWithIdOnly = await prisma.manuais.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends manuaisFindManyArgs>(args?: SelectSubset<T, manuaisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manuais.
     * @param {manuaisCreateArgs} args - Arguments to create a Manuais.
     * @example
     * // Create one Manuais
     * const Manuais = await prisma.manuais.create({
     *   data: {
     *     // ... data to create a Manuais
     *   }
     * })
     * 
     */
    create<T extends manuaisCreateArgs>(args: SelectSubset<T, manuaisCreateArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manuais.
     * @param {manuaisCreateManyArgs} args - Arguments to create many Manuais.
     * @example
     * // Create many Manuais
     * const manuais = await prisma.manuais.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends manuaisCreateManyArgs>(args?: SelectSubset<T, manuaisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Manuais and returns the data saved in the database.
     * @param {manuaisCreateManyAndReturnArgs} args - Arguments to create many Manuais.
     * @example
     * // Create many Manuais
     * const manuais = await prisma.manuais.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Manuais and only return the `id`
     * const manuaisWithIdOnly = await prisma.manuais.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends manuaisCreateManyAndReturnArgs>(args?: SelectSubset<T, manuaisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manuais.
     * @param {manuaisDeleteArgs} args - Arguments to delete one Manuais.
     * @example
     * // Delete one Manuais
     * const Manuais = await prisma.manuais.delete({
     *   where: {
     *     // ... filter to delete one Manuais
     *   }
     * })
     * 
     */
    delete<T extends manuaisDeleteArgs>(args: SelectSubset<T, manuaisDeleteArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manuais.
     * @param {manuaisUpdateArgs} args - Arguments to update one Manuais.
     * @example
     * // Update one Manuais
     * const manuais = await prisma.manuais.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends manuaisUpdateArgs>(args: SelectSubset<T, manuaisUpdateArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manuais.
     * @param {manuaisDeleteManyArgs} args - Arguments to filter Manuais to delete.
     * @example
     * // Delete a few Manuais
     * const { count } = await prisma.manuais.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends manuaisDeleteManyArgs>(args?: SelectSubset<T, manuaisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manuais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manuaisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manuais
     * const manuais = await prisma.manuais.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends manuaisUpdateManyArgs>(args: SelectSubset<T, manuaisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manuais and returns the data updated in the database.
     * @param {manuaisUpdateManyAndReturnArgs} args - Arguments to update many Manuais.
     * @example
     * // Update many Manuais
     * const manuais = await prisma.manuais.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Manuais and only return the `id`
     * const manuaisWithIdOnly = await prisma.manuais.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends manuaisUpdateManyAndReturnArgs>(args: SelectSubset<T, manuaisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manuais.
     * @param {manuaisUpsertArgs} args - Arguments to update or create a Manuais.
     * @example
     * // Update or create a Manuais
     * const manuais = await prisma.manuais.upsert({
     *   create: {
     *     // ... data to create a Manuais
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manuais we want to update
     *   }
     * })
     */
    upsert<T extends manuaisUpsertArgs>(args: SelectSubset<T, manuaisUpsertArgs<ExtArgs>>): Prisma__manuaisClient<$Result.GetResult<Prisma.$manuaisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manuais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manuaisCountArgs} args - Arguments to filter Manuais to count.
     * @example
     * // Count the number of Manuais
     * const count = await prisma.manuais.count({
     *   where: {
     *     // ... the filter for the Manuais we want to count
     *   }
     * })
    **/
    count<T extends manuaisCountArgs>(
      args?: Subset<T, manuaisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManuaisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manuais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManuaisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManuaisAggregateArgs>(args: Subset<T, ManuaisAggregateArgs>): Prisma.PrismaPromise<GetManuaisAggregateType<T>>

    /**
     * Group by Manuais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {manuaisGroupByArgs} args - Group by arguments.
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
      T extends manuaisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: manuaisGroupByArgs['orderBy'] }
        : { orderBy?: manuaisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, manuaisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManuaisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the manuais model
   */
  readonly fields: manuaisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for manuais.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__manuaisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the manuais model
   */
  interface manuaisFieldRefs {
    readonly id: FieldRef<"manuais", 'BigInt'>
    readonly titulo: FieldRef<"manuais", 'String'>
    readonly conteudo: FieldRef<"manuais", 'String'>
    readonly ordem: FieldRef<"manuais", 'BigInt'>
    readonly categoria_id: FieldRef<"manuais", 'BigInt'>
    readonly descricao: FieldRef<"manuais", 'String'>
  }
    

  // Custom InputTypes
  /**
   * manuais findUnique
   */
  export type manuaisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * Filter, which manuais to fetch.
     */
    where: manuaisWhereUniqueInput
  }

  /**
   * manuais findUniqueOrThrow
   */
  export type manuaisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * Filter, which manuais to fetch.
     */
    where: manuaisWhereUniqueInput
  }

  /**
   * manuais findFirst
   */
  export type manuaisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * Filter, which manuais to fetch.
     */
    where?: manuaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manuais to fetch.
     */
    orderBy?: manuaisOrderByWithRelationInput | manuaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for manuais.
     */
    cursor?: manuaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manuais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manuais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manuais.
     */
    distinct?: ManuaisScalarFieldEnum | ManuaisScalarFieldEnum[]
  }

  /**
   * manuais findFirstOrThrow
   */
  export type manuaisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * Filter, which manuais to fetch.
     */
    where?: manuaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manuais to fetch.
     */
    orderBy?: manuaisOrderByWithRelationInput | manuaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for manuais.
     */
    cursor?: manuaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manuais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manuais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of manuais.
     */
    distinct?: ManuaisScalarFieldEnum | ManuaisScalarFieldEnum[]
  }

  /**
   * manuais findMany
   */
  export type manuaisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * Filter, which manuais to fetch.
     */
    where?: manuaisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of manuais to fetch.
     */
    orderBy?: manuaisOrderByWithRelationInput | manuaisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing manuais.
     */
    cursor?: manuaisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` manuais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` manuais.
     */
    skip?: number
    distinct?: ManuaisScalarFieldEnum | ManuaisScalarFieldEnum[]
  }

  /**
   * manuais create
   */
  export type manuaisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * The data needed to create a manuais.
     */
    data?: XOR<manuaisCreateInput, manuaisUncheckedCreateInput>
  }

  /**
   * manuais createMany
   */
  export type manuaisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many manuais.
     */
    data: manuaisCreateManyInput | manuaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * manuais createManyAndReturn
   */
  export type manuaisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * The data used to create many manuais.
     */
    data: manuaisCreateManyInput | manuaisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * manuais update
   */
  export type manuaisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * The data needed to update a manuais.
     */
    data: XOR<manuaisUpdateInput, manuaisUncheckedUpdateInput>
    /**
     * Choose, which manuais to update.
     */
    where: manuaisWhereUniqueInput
  }

  /**
   * manuais updateMany
   */
  export type manuaisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update manuais.
     */
    data: XOR<manuaisUpdateManyMutationInput, manuaisUncheckedUpdateManyInput>
    /**
     * Filter which manuais to update
     */
    where?: manuaisWhereInput
    /**
     * Limit how many manuais to update.
     */
    limit?: number
  }

  /**
   * manuais updateManyAndReturn
   */
  export type manuaisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * The data used to update manuais.
     */
    data: XOR<manuaisUpdateManyMutationInput, manuaisUncheckedUpdateManyInput>
    /**
     * Filter which manuais to update
     */
    where?: manuaisWhereInput
    /**
     * Limit how many manuais to update.
     */
    limit?: number
  }

  /**
   * manuais upsert
   */
  export type manuaisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * The filter to search for the manuais to update in case it exists.
     */
    where: manuaisWhereUniqueInput
    /**
     * In case the manuais found by the `where` argument doesn't exist, create a new manuais with this data.
     */
    create: XOR<manuaisCreateInput, manuaisUncheckedCreateInput>
    /**
     * In case the manuais was found with the provided `where` argument, update it with this data.
     */
    update: XOR<manuaisUpdateInput, manuaisUncheckedUpdateInput>
  }

  /**
   * manuais delete
   */
  export type manuaisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
    /**
     * Filter which manuais to delete.
     */
    where: manuaisWhereUniqueInput
  }

  /**
   * manuais deleteMany
   */
  export type manuaisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which manuais to delete
     */
    where?: manuaisWhereInput
    /**
     * Limit how many manuais to delete.
     */
    limit?: number
  }

  /**
   * manuais without action
   */
  export type manuaisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the manuais
     */
    select?: manuaisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the manuais
     */
    omit?: manuaisOmit<ExtArgs> | null
  }


  /**
   * Model montadoras
   */

  export type AggregateMontadoras = {
    _count: MontadorasCountAggregateOutputType | null
    _avg: MontadorasAvgAggregateOutputType | null
    _sum: MontadorasSumAggregateOutputType | null
    _min: MontadorasMinAggregateOutputType | null
    _max: MontadorasMaxAggregateOutputType | null
  }

  export type MontadorasAvgAggregateOutputType = {
    id: number | null
  }

  export type MontadorasSumAggregateOutputType = {
    id: bigint | null
  }

  export type MontadorasMinAggregateOutputType = {
    id: bigint | null
    nome: string | null
    logo_url: string | null
  }

  export type MontadorasMaxAggregateOutputType = {
    id: bigint | null
    nome: string | null
    logo_url: string | null
  }

  export type MontadorasCountAggregateOutputType = {
    id: number
    nome: number
    logo_url: number
    _all: number
  }


  export type MontadorasAvgAggregateInputType = {
    id?: true
  }

  export type MontadorasSumAggregateInputType = {
    id?: true
  }

  export type MontadorasMinAggregateInputType = {
    id?: true
    nome?: true
    logo_url?: true
  }

  export type MontadorasMaxAggregateInputType = {
    id?: true
    nome?: true
    logo_url?: true
  }

  export type MontadorasCountAggregateInputType = {
    id?: true
    nome?: true
    logo_url?: true
    _all?: true
  }

  export type MontadorasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which montadoras to aggregate.
     */
    where?: montadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of montadoras to fetch.
     */
    orderBy?: montadorasOrderByWithRelationInput | montadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: montadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` montadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` montadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned montadoras
    **/
    _count?: true | MontadorasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MontadorasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MontadorasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MontadorasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MontadorasMaxAggregateInputType
  }

  export type GetMontadorasAggregateType<T extends MontadorasAggregateArgs> = {
        [P in keyof T & keyof AggregateMontadoras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMontadoras[P]>
      : GetScalarType<T[P], AggregateMontadoras[P]>
  }




  export type montadorasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: montadorasWhereInput
    orderBy?: montadorasOrderByWithAggregationInput | montadorasOrderByWithAggregationInput[]
    by: MontadorasScalarFieldEnum[] | MontadorasScalarFieldEnum
    having?: montadorasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MontadorasCountAggregateInputType | true
    _avg?: MontadorasAvgAggregateInputType
    _sum?: MontadorasSumAggregateInputType
    _min?: MontadorasMinAggregateInputType
    _max?: MontadorasMaxAggregateInputType
  }

  export type MontadorasGroupByOutputType = {
    id: bigint
    nome: string | null
    logo_url: string | null
    _count: MontadorasCountAggregateOutputType | null
    _avg: MontadorasAvgAggregateOutputType | null
    _sum: MontadorasSumAggregateOutputType | null
    _min: MontadorasMinAggregateOutputType | null
    _max: MontadorasMaxAggregateOutputType | null
  }

  type GetMontadorasGroupByPayload<T extends montadorasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MontadorasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MontadorasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MontadorasGroupByOutputType[P]>
            : GetScalarType<T[P], MontadorasGroupByOutputType[P]>
        }
      >
    >


  export type montadorasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logo_url?: boolean
    carros?: boolean | montadoras$carrosArgs<ExtArgs>
    _count?: boolean | MontadorasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["montadoras"]>

  export type montadorasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logo_url?: boolean
  }, ExtArgs["result"]["montadoras"]>

  export type montadorasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    logo_url?: boolean
  }, ExtArgs["result"]["montadoras"]>

  export type montadorasSelectScalar = {
    id?: boolean
    nome?: boolean
    logo_url?: boolean
  }

  export type montadorasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "logo_url", ExtArgs["result"]["montadoras"]>
  export type montadorasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carros?: boolean | montadoras$carrosArgs<ExtArgs>
    _count?: boolean | MontadorasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type montadorasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type montadorasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $montadorasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "montadoras"
    objects: {
      carros: Prisma.$carrosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nome: string | null
      logo_url: string | null
    }, ExtArgs["result"]["montadoras"]>
    composites: {}
  }

  type montadorasGetPayload<S extends boolean | null | undefined | montadorasDefaultArgs> = $Result.GetResult<Prisma.$montadorasPayload, S>

  type montadorasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<montadorasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MontadorasCountAggregateInputType | true
    }

  export interface montadorasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['montadoras'], meta: { name: 'montadoras' } }
    /**
     * Find zero or one Montadoras that matches the filter.
     * @param {montadorasFindUniqueArgs} args - Arguments to find a Montadoras
     * @example
     * // Get one Montadoras
     * const montadoras = await prisma.montadoras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends montadorasFindUniqueArgs>(args: SelectSubset<T, montadorasFindUniqueArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Montadoras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {montadorasFindUniqueOrThrowArgs} args - Arguments to find a Montadoras
     * @example
     * // Get one Montadoras
     * const montadoras = await prisma.montadoras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends montadorasFindUniqueOrThrowArgs>(args: SelectSubset<T, montadorasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Montadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {montadorasFindFirstArgs} args - Arguments to find a Montadoras
     * @example
     * // Get one Montadoras
     * const montadoras = await prisma.montadoras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends montadorasFindFirstArgs>(args?: SelectSubset<T, montadorasFindFirstArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Montadoras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {montadorasFindFirstOrThrowArgs} args - Arguments to find a Montadoras
     * @example
     * // Get one Montadoras
     * const montadoras = await prisma.montadoras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends montadorasFindFirstOrThrowArgs>(args?: SelectSubset<T, montadorasFindFirstOrThrowArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Montadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {montadorasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Montadoras
     * const montadoras = await prisma.montadoras.findMany()
     * 
     * // Get first 10 Montadoras
     * const montadoras = await prisma.montadoras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const montadorasWithIdOnly = await prisma.montadoras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends montadorasFindManyArgs>(args?: SelectSubset<T, montadorasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Montadoras.
     * @param {montadorasCreateArgs} args - Arguments to create a Montadoras.
     * @example
     * // Create one Montadoras
     * const Montadoras = await prisma.montadoras.create({
     *   data: {
     *     // ... data to create a Montadoras
     *   }
     * })
     * 
     */
    create<T extends montadorasCreateArgs>(args: SelectSubset<T, montadorasCreateArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Montadoras.
     * @param {montadorasCreateManyArgs} args - Arguments to create many Montadoras.
     * @example
     * // Create many Montadoras
     * const montadoras = await prisma.montadoras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends montadorasCreateManyArgs>(args?: SelectSubset<T, montadorasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Montadoras and returns the data saved in the database.
     * @param {montadorasCreateManyAndReturnArgs} args - Arguments to create many Montadoras.
     * @example
     * // Create many Montadoras
     * const montadoras = await prisma.montadoras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Montadoras and only return the `id`
     * const montadorasWithIdOnly = await prisma.montadoras.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends montadorasCreateManyAndReturnArgs>(args?: SelectSubset<T, montadorasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Montadoras.
     * @param {montadorasDeleteArgs} args - Arguments to delete one Montadoras.
     * @example
     * // Delete one Montadoras
     * const Montadoras = await prisma.montadoras.delete({
     *   where: {
     *     // ... filter to delete one Montadoras
     *   }
     * })
     * 
     */
    delete<T extends montadorasDeleteArgs>(args: SelectSubset<T, montadorasDeleteArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Montadoras.
     * @param {montadorasUpdateArgs} args - Arguments to update one Montadoras.
     * @example
     * // Update one Montadoras
     * const montadoras = await prisma.montadoras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends montadorasUpdateArgs>(args: SelectSubset<T, montadorasUpdateArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Montadoras.
     * @param {montadorasDeleteManyArgs} args - Arguments to filter Montadoras to delete.
     * @example
     * // Delete a few Montadoras
     * const { count } = await prisma.montadoras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends montadorasDeleteManyArgs>(args?: SelectSubset<T, montadorasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Montadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {montadorasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Montadoras
     * const montadoras = await prisma.montadoras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends montadorasUpdateManyArgs>(args: SelectSubset<T, montadorasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Montadoras and returns the data updated in the database.
     * @param {montadorasUpdateManyAndReturnArgs} args - Arguments to update many Montadoras.
     * @example
     * // Update many Montadoras
     * const montadoras = await prisma.montadoras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Montadoras and only return the `id`
     * const montadorasWithIdOnly = await prisma.montadoras.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends montadorasUpdateManyAndReturnArgs>(args: SelectSubset<T, montadorasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Montadoras.
     * @param {montadorasUpsertArgs} args - Arguments to update or create a Montadoras.
     * @example
     * // Update or create a Montadoras
     * const montadoras = await prisma.montadoras.upsert({
     *   create: {
     *     // ... data to create a Montadoras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Montadoras we want to update
     *   }
     * })
     */
    upsert<T extends montadorasUpsertArgs>(args: SelectSubset<T, montadorasUpsertArgs<ExtArgs>>): Prisma__montadorasClient<$Result.GetResult<Prisma.$montadorasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Montadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {montadorasCountArgs} args - Arguments to filter Montadoras to count.
     * @example
     * // Count the number of Montadoras
     * const count = await prisma.montadoras.count({
     *   where: {
     *     // ... the filter for the Montadoras we want to count
     *   }
     * })
    **/
    count<T extends montadorasCountArgs>(
      args?: Subset<T, montadorasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MontadorasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Montadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MontadorasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MontadorasAggregateArgs>(args: Subset<T, MontadorasAggregateArgs>): Prisma.PrismaPromise<GetMontadorasAggregateType<T>>

    /**
     * Group by Montadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {montadorasGroupByArgs} args - Group by arguments.
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
      T extends montadorasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: montadorasGroupByArgs['orderBy'] }
        : { orderBy?: montadorasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, montadorasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMontadorasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the montadoras model
   */
  readonly fields: montadorasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for montadoras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__montadorasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carros<T extends montadoras$carrosArgs<ExtArgs> = {}>(args?: Subset<T, montadoras$carrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the montadoras model
   */
  interface montadorasFieldRefs {
    readonly id: FieldRef<"montadoras", 'BigInt'>
    readonly nome: FieldRef<"montadoras", 'String'>
    readonly logo_url: FieldRef<"montadoras", 'String'>
  }
    

  // Custom InputTypes
  /**
   * montadoras findUnique
   */
  export type montadorasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * Filter, which montadoras to fetch.
     */
    where: montadorasWhereUniqueInput
  }

  /**
   * montadoras findUniqueOrThrow
   */
  export type montadorasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * Filter, which montadoras to fetch.
     */
    where: montadorasWhereUniqueInput
  }

  /**
   * montadoras findFirst
   */
  export type montadorasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * Filter, which montadoras to fetch.
     */
    where?: montadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of montadoras to fetch.
     */
    orderBy?: montadorasOrderByWithRelationInput | montadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for montadoras.
     */
    cursor?: montadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` montadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` montadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of montadoras.
     */
    distinct?: MontadorasScalarFieldEnum | MontadorasScalarFieldEnum[]
  }

  /**
   * montadoras findFirstOrThrow
   */
  export type montadorasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * Filter, which montadoras to fetch.
     */
    where?: montadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of montadoras to fetch.
     */
    orderBy?: montadorasOrderByWithRelationInput | montadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for montadoras.
     */
    cursor?: montadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` montadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` montadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of montadoras.
     */
    distinct?: MontadorasScalarFieldEnum | MontadorasScalarFieldEnum[]
  }

  /**
   * montadoras findMany
   */
  export type montadorasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * Filter, which montadoras to fetch.
     */
    where?: montadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of montadoras to fetch.
     */
    orderBy?: montadorasOrderByWithRelationInput | montadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing montadoras.
     */
    cursor?: montadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` montadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` montadoras.
     */
    skip?: number
    distinct?: MontadorasScalarFieldEnum | MontadorasScalarFieldEnum[]
  }

  /**
   * montadoras create
   */
  export type montadorasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * The data needed to create a montadoras.
     */
    data?: XOR<montadorasCreateInput, montadorasUncheckedCreateInput>
  }

  /**
   * montadoras createMany
   */
  export type montadorasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many montadoras.
     */
    data: montadorasCreateManyInput | montadorasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * montadoras createManyAndReturn
   */
  export type montadorasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * The data used to create many montadoras.
     */
    data: montadorasCreateManyInput | montadorasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * montadoras update
   */
  export type montadorasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * The data needed to update a montadoras.
     */
    data: XOR<montadorasUpdateInput, montadorasUncheckedUpdateInput>
    /**
     * Choose, which montadoras to update.
     */
    where: montadorasWhereUniqueInput
  }

  /**
   * montadoras updateMany
   */
  export type montadorasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update montadoras.
     */
    data: XOR<montadorasUpdateManyMutationInput, montadorasUncheckedUpdateManyInput>
    /**
     * Filter which montadoras to update
     */
    where?: montadorasWhereInput
    /**
     * Limit how many montadoras to update.
     */
    limit?: number
  }

  /**
   * montadoras updateManyAndReturn
   */
  export type montadorasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * The data used to update montadoras.
     */
    data: XOR<montadorasUpdateManyMutationInput, montadorasUncheckedUpdateManyInput>
    /**
     * Filter which montadoras to update
     */
    where?: montadorasWhereInput
    /**
     * Limit how many montadoras to update.
     */
    limit?: number
  }

  /**
   * montadoras upsert
   */
  export type montadorasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * The filter to search for the montadoras to update in case it exists.
     */
    where: montadorasWhereUniqueInput
    /**
     * In case the montadoras found by the `where` argument doesn't exist, create a new montadoras with this data.
     */
    create: XOR<montadorasCreateInput, montadorasUncheckedCreateInput>
    /**
     * In case the montadoras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<montadorasUpdateInput, montadorasUncheckedUpdateInput>
  }

  /**
   * montadoras delete
   */
  export type montadorasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
    /**
     * Filter which montadoras to delete.
     */
    where: montadorasWhereUniqueInput
  }

  /**
   * montadoras deleteMany
   */
  export type montadorasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which montadoras to delete
     */
    where?: montadorasWhereInput
    /**
     * Limit how many montadoras to delete.
     */
    limit?: number
  }

  /**
   * montadoras.carros
   */
  export type montadoras$carrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carros
     */
    select?: carrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carros
     */
    omit?: carrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrosInclude<ExtArgs> | null
    where?: carrosWhereInput
    orderBy?: carrosOrderByWithRelationInput | carrosOrderByWithRelationInput[]
    cursor?: carrosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrosScalarFieldEnum | CarrosScalarFieldEnum[]
  }

  /**
   * montadoras without action
   */
  export type montadorasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the montadoras
     */
    select?: montadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the montadoras
     */
    omit?: montadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: montadorasInclude<ExtArgs> | null
  }


  /**
   * Model produto_fotos
   */

  export type AggregateProduto_fotos = {
    _count: Produto_fotosCountAggregateOutputType | null
    _avg: Produto_fotosAvgAggregateOutputType | null
    _sum: Produto_fotosSumAggregateOutputType | null
    _min: Produto_fotosMinAggregateOutputType | null
    _max: Produto_fotosMaxAggregateOutputType | null
  }

  export type Produto_fotosAvgAggregateOutputType = {
    id: number | null
    produto_id: number | null
  }

  export type Produto_fotosSumAggregateOutputType = {
    id: bigint | null
    produto_id: bigint | null
  }

  export type Produto_fotosMinAggregateOutputType = {
    id: bigint | null
    produto_id: bigint | null
    foto_url: string | null
  }

  export type Produto_fotosMaxAggregateOutputType = {
    id: bigint | null
    produto_id: bigint | null
    foto_url: string | null
  }

  export type Produto_fotosCountAggregateOutputType = {
    id: number
    produto_id: number
    foto_url: number
    _all: number
  }


  export type Produto_fotosAvgAggregateInputType = {
    id?: true
    produto_id?: true
  }

  export type Produto_fotosSumAggregateInputType = {
    id?: true
    produto_id?: true
  }

  export type Produto_fotosMinAggregateInputType = {
    id?: true
    produto_id?: true
    foto_url?: true
  }

  export type Produto_fotosMaxAggregateInputType = {
    id?: true
    produto_id?: true
    foto_url?: true
  }

  export type Produto_fotosCountAggregateInputType = {
    id?: true
    produto_id?: true
    foto_url?: true
    _all?: true
  }

  export type Produto_fotosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto_fotos to aggregate.
     */
    where?: produto_fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_fotos to fetch.
     */
    orderBy?: produto_fotosOrderByWithRelationInput | produto_fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produto_fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produto_fotos
    **/
    _count?: true | Produto_fotosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Produto_fotosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Produto_fotosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Produto_fotosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Produto_fotosMaxAggregateInputType
  }

  export type GetProduto_fotosAggregateType<T extends Produto_fotosAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto_fotos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto_fotos[P]>
      : GetScalarType<T[P], AggregateProduto_fotos[P]>
  }




  export type produto_fotosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produto_fotosWhereInput
    orderBy?: produto_fotosOrderByWithAggregationInput | produto_fotosOrderByWithAggregationInput[]
    by: Produto_fotosScalarFieldEnum[] | Produto_fotosScalarFieldEnum
    having?: produto_fotosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Produto_fotosCountAggregateInputType | true
    _avg?: Produto_fotosAvgAggregateInputType
    _sum?: Produto_fotosSumAggregateInputType
    _min?: Produto_fotosMinAggregateInputType
    _max?: Produto_fotosMaxAggregateInputType
  }

  export type Produto_fotosGroupByOutputType = {
    id: bigint
    produto_id: bigint | null
    foto_url: string | null
    _count: Produto_fotosCountAggregateOutputType | null
    _avg: Produto_fotosAvgAggregateOutputType | null
    _sum: Produto_fotosSumAggregateOutputType | null
    _min: Produto_fotosMinAggregateOutputType | null
    _max: Produto_fotosMaxAggregateOutputType | null
  }

  type GetProduto_fotosGroupByPayload<T extends produto_fotosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Produto_fotosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Produto_fotosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Produto_fotosGroupByOutputType[P]>
            : GetScalarType<T[P], Produto_fotosGroupByOutputType[P]>
        }
      >
    >


  export type produto_fotosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    foto_url?: boolean
  }, ExtArgs["result"]["produto_fotos"]>

  export type produto_fotosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    foto_url?: boolean
  }, ExtArgs["result"]["produto_fotos"]>

  export type produto_fotosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    foto_url?: boolean
  }, ExtArgs["result"]["produto_fotos"]>

  export type produto_fotosSelectScalar = {
    id?: boolean
    produto_id?: boolean
    foto_url?: boolean
  }

  export type produto_fotosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto_id" | "foto_url", ExtArgs["result"]["produto_fotos"]>

  export type $produto_fotosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produto_fotos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      produto_id: bigint | null
      foto_url: string | null
    }, ExtArgs["result"]["produto_fotos"]>
    composites: {}
  }

  type produto_fotosGetPayload<S extends boolean | null | undefined | produto_fotosDefaultArgs> = $Result.GetResult<Prisma.$produto_fotosPayload, S>

  type produto_fotosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produto_fotosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Produto_fotosCountAggregateInputType | true
    }

  export interface produto_fotosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produto_fotos'], meta: { name: 'produto_fotos' } }
    /**
     * Find zero or one Produto_fotos that matches the filter.
     * @param {produto_fotosFindUniqueArgs} args - Arguments to find a Produto_fotos
     * @example
     * // Get one Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produto_fotosFindUniqueArgs>(args: SelectSubset<T, produto_fotosFindUniqueArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto_fotos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produto_fotosFindUniqueOrThrowArgs} args - Arguments to find a Produto_fotos
     * @example
     * // Get one Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produto_fotosFindUniqueOrThrowArgs>(args: SelectSubset<T, produto_fotosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto_fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_fotosFindFirstArgs} args - Arguments to find a Produto_fotos
     * @example
     * // Get one Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produto_fotosFindFirstArgs>(args?: SelectSubset<T, produto_fotosFindFirstArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto_fotos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_fotosFindFirstOrThrowArgs} args - Arguments to find a Produto_fotos
     * @example
     * // Get one Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produto_fotosFindFirstOrThrowArgs>(args?: SelectSubset<T, produto_fotosFindFirstOrThrowArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produto_fotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_fotosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.findMany()
     * 
     * // Get first 10 Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produto_fotosWithIdOnly = await prisma.produto_fotos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produto_fotosFindManyArgs>(args?: SelectSubset<T, produto_fotosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto_fotos.
     * @param {produto_fotosCreateArgs} args - Arguments to create a Produto_fotos.
     * @example
     * // Create one Produto_fotos
     * const Produto_fotos = await prisma.produto_fotos.create({
     *   data: {
     *     // ... data to create a Produto_fotos
     *   }
     * })
     * 
     */
    create<T extends produto_fotosCreateArgs>(args: SelectSubset<T, produto_fotosCreateArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produto_fotos.
     * @param {produto_fotosCreateManyArgs} args - Arguments to create many Produto_fotos.
     * @example
     * // Create many Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produto_fotosCreateManyArgs>(args?: SelectSubset<T, produto_fotosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produto_fotos and returns the data saved in the database.
     * @param {produto_fotosCreateManyAndReturnArgs} args - Arguments to create many Produto_fotos.
     * @example
     * // Create many Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produto_fotos and only return the `id`
     * const produto_fotosWithIdOnly = await prisma.produto_fotos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produto_fotosCreateManyAndReturnArgs>(args?: SelectSubset<T, produto_fotosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto_fotos.
     * @param {produto_fotosDeleteArgs} args - Arguments to delete one Produto_fotos.
     * @example
     * // Delete one Produto_fotos
     * const Produto_fotos = await prisma.produto_fotos.delete({
     *   where: {
     *     // ... filter to delete one Produto_fotos
     *   }
     * })
     * 
     */
    delete<T extends produto_fotosDeleteArgs>(args: SelectSubset<T, produto_fotosDeleteArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto_fotos.
     * @param {produto_fotosUpdateArgs} args - Arguments to update one Produto_fotos.
     * @example
     * // Update one Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produto_fotosUpdateArgs>(args: SelectSubset<T, produto_fotosUpdateArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produto_fotos.
     * @param {produto_fotosDeleteManyArgs} args - Arguments to filter Produto_fotos to delete.
     * @example
     * // Delete a few Produto_fotos
     * const { count } = await prisma.produto_fotos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produto_fotosDeleteManyArgs>(args?: SelectSubset<T, produto_fotosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produto_fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_fotosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produto_fotosUpdateManyArgs>(args: SelectSubset<T, produto_fotosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produto_fotos and returns the data updated in the database.
     * @param {produto_fotosUpdateManyAndReturnArgs} args - Arguments to update many Produto_fotos.
     * @example
     * // Update many Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produto_fotos and only return the `id`
     * const produto_fotosWithIdOnly = await prisma.produto_fotos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produto_fotosUpdateManyAndReturnArgs>(args: SelectSubset<T, produto_fotosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto_fotos.
     * @param {produto_fotosUpsertArgs} args - Arguments to update or create a Produto_fotos.
     * @example
     * // Update or create a Produto_fotos
     * const produto_fotos = await prisma.produto_fotos.upsert({
     *   create: {
     *     // ... data to create a Produto_fotos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto_fotos we want to update
     *   }
     * })
     */
    upsert<T extends produto_fotosUpsertArgs>(args: SelectSubset<T, produto_fotosUpsertArgs<ExtArgs>>): Prisma__produto_fotosClient<$Result.GetResult<Prisma.$produto_fotosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produto_fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_fotosCountArgs} args - Arguments to filter Produto_fotos to count.
     * @example
     * // Count the number of Produto_fotos
     * const count = await prisma.produto_fotos.count({
     *   where: {
     *     // ... the filter for the Produto_fotos we want to count
     *   }
     * })
    **/
    count<T extends produto_fotosCountArgs>(
      args?: Subset<T, produto_fotosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Produto_fotosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto_fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Produto_fotosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Produto_fotosAggregateArgs>(args: Subset<T, Produto_fotosAggregateArgs>): Prisma.PrismaPromise<GetProduto_fotosAggregateType<T>>

    /**
     * Group by Produto_fotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produto_fotosGroupByArgs} args - Group by arguments.
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
      T extends produto_fotosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produto_fotosGroupByArgs['orderBy'] }
        : { orderBy?: produto_fotosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produto_fotosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduto_fotosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produto_fotos model
   */
  readonly fields: produto_fotosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produto_fotos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produto_fotosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the produto_fotos model
   */
  interface produto_fotosFieldRefs {
    readonly id: FieldRef<"produto_fotos", 'BigInt'>
    readonly produto_id: FieldRef<"produto_fotos", 'BigInt'>
    readonly foto_url: FieldRef<"produto_fotos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produto_fotos findUnique
   */
  export type produto_fotosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * Filter, which produto_fotos to fetch.
     */
    where: produto_fotosWhereUniqueInput
  }

  /**
   * produto_fotos findUniqueOrThrow
   */
  export type produto_fotosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * Filter, which produto_fotos to fetch.
     */
    where: produto_fotosWhereUniqueInput
  }

  /**
   * produto_fotos findFirst
   */
  export type produto_fotosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * Filter, which produto_fotos to fetch.
     */
    where?: produto_fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_fotos to fetch.
     */
    orderBy?: produto_fotosOrderByWithRelationInput | produto_fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produto_fotos.
     */
    cursor?: produto_fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produto_fotos.
     */
    distinct?: Produto_fotosScalarFieldEnum | Produto_fotosScalarFieldEnum[]
  }

  /**
   * produto_fotos findFirstOrThrow
   */
  export type produto_fotosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * Filter, which produto_fotos to fetch.
     */
    where?: produto_fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_fotos to fetch.
     */
    orderBy?: produto_fotosOrderByWithRelationInput | produto_fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produto_fotos.
     */
    cursor?: produto_fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_fotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produto_fotos.
     */
    distinct?: Produto_fotosScalarFieldEnum | Produto_fotosScalarFieldEnum[]
  }

  /**
   * produto_fotos findMany
   */
  export type produto_fotosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * Filter, which produto_fotos to fetch.
     */
    where?: produto_fotosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produto_fotos to fetch.
     */
    orderBy?: produto_fotosOrderByWithRelationInput | produto_fotosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produto_fotos.
     */
    cursor?: produto_fotosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produto_fotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produto_fotos.
     */
    skip?: number
    distinct?: Produto_fotosScalarFieldEnum | Produto_fotosScalarFieldEnum[]
  }

  /**
   * produto_fotos create
   */
  export type produto_fotosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * The data needed to create a produto_fotos.
     */
    data?: XOR<produto_fotosCreateInput, produto_fotosUncheckedCreateInput>
  }

  /**
   * produto_fotos createMany
   */
  export type produto_fotosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produto_fotos.
     */
    data: produto_fotosCreateManyInput | produto_fotosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto_fotos createManyAndReturn
   */
  export type produto_fotosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * The data used to create many produto_fotos.
     */
    data: produto_fotosCreateManyInput | produto_fotosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produto_fotos update
   */
  export type produto_fotosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * The data needed to update a produto_fotos.
     */
    data: XOR<produto_fotosUpdateInput, produto_fotosUncheckedUpdateInput>
    /**
     * Choose, which produto_fotos to update.
     */
    where: produto_fotosWhereUniqueInput
  }

  /**
   * produto_fotos updateMany
   */
  export type produto_fotosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produto_fotos.
     */
    data: XOR<produto_fotosUpdateManyMutationInput, produto_fotosUncheckedUpdateManyInput>
    /**
     * Filter which produto_fotos to update
     */
    where?: produto_fotosWhereInput
    /**
     * Limit how many produto_fotos to update.
     */
    limit?: number
  }

  /**
   * produto_fotos updateManyAndReturn
   */
  export type produto_fotosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * The data used to update produto_fotos.
     */
    data: XOR<produto_fotosUpdateManyMutationInput, produto_fotosUncheckedUpdateManyInput>
    /**
     * Filter which produto_fotos to update
     */
    where?: produto_fotosWhereInput
    /**
     * Limit how many produto_fotos to update.
     */
    limit?: number
  }

  /**
   * produto_fotos upsert
   */
  export type produto_fotosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * The filter to search for the produto_fotos to update in case it exists.
     */
    where: produto_fotosWhereUniqueInput
    /**
     * In case the produto_fotos found by the `where` argument doesn't exist, create a new produto_fotos with this data.
     */
    create: XOR<produto_fotosCreateInput, produto_fotosUncheckedCreateInput>
    /**
     * In case the produto_fotos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produto_fotosUpdateInput, produto_fotosUncheckedUpdateInput>
  }

  /**
   * produto_fotos delete
   */
  export type produto_fotosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
    /**
     * Filter which produto_fotos to delete.
     */
    where: produto_fotosWhereUniqueInput
  }

  /**
   * produto_fotos deleteMany
   */
  export type produto_fotosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produto_fotos to delete
     */
    where?: produto_fotosWhereInput
    /**
     * Limit how many produto_fotos to delete.
     */
    limit?: number
  }

  /**
   * produto_fotos without action
   */
  export type produto_fotosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produto_fotos
     */
    select?: produto_fotosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produto_fotos
     */
    omit?: produto_fotosOmit<ExtArgs> | null
  }


  /**
   * Model produtos
   */

  export type AggregateProdutos = {
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  export type ProdutosAvgAggregateOutputType = {
    id: number | null
  }

  export type ProdutosSumAggregateOutputType = {
    id: bigint | null
  }

  export type ProdutosMinAggregateOutputType = {
    id: bigint | null
    nome: string | null
    codigo: string | null
    foto_url: string | null
    video_url: string | null
  }

  export type ProdutosMaxAggregateOutputType = {
    id: bigint | null
    nome: string | null
    codigo: string | null
    foto_url: string | null
    video_url: string | null
  }

  export type ProdutosCountAggregateOutputType = {
    id: number
    nome: number
    codigo: number
    foto_url: number
    video_url: number
    _all: number
  }


  export type ProdutosAvgAggregateInputType = {
    id?: true
  }

  export type ProdutosSumAggregateInputType = {
    id?: true
  }

  export type ProdutosMinAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    foto_url?: true
    video_url?: true
  }

  export type ProdutosMaxAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    foto_url?: true
    video_url?: true
  }

  export type ProdutosCountAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    foto_url?: true
    video_url?: true
    _all?: true
  }

  export type ProdutosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to aggregate.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produtos
    **/
    _count?: true | ProdutosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutosMaxAggregateInputType
  }

  export type GetProdutosAggregateType<T extends ProdutosAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutos[P]>
      : GetScalarType<T[P], AggregateProdutos[P]>
  }




  export type produtosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produtosWhereInput
    orderBy?: produtosOrderByWithAggregationInput | produtosOrderByWithAggregationInput[]
    by: ProdutosScalarFieldEnum[] | ProdutosScalarFieldEnum
    having?: produtosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutosCountAggregateInputType | true
    _avg?: ProdutosAvgAggregateInputType
    _sum?: ProdutosSumAggregateInputType
    _min?: ProdutosMinAggregateInputType
    _max?: ProdutosMaxAggregateInputType
  }

  export type ProdutosGroupByOutputType = {
    id: bigint
    nome: string | null
    codigo: string | null
    foto_url: string | null
    video_url: string | null
    _count: ProdutosCountAggregateOutputType | null
    _avg: ProdutosAvgAggregateOutputType | null
    _sum: ProdutosSumAggregateOutputType | null
    _min: ProdutosMinAggregateOutputType | null
    _max: ProdutosMaxAggregateOutputType | null
  }

  type GetProdutosGroupByPayload<T extends produtosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutosGroupByOutputType[P]>
        }
      >
    >


  export type produtosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    foto_url?: boolean
    video_url?: boolean
    carros?: boolean | produtos$carrosArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    foto_url?: boolean
    video_url?: boolean
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    foto_url?: boolean
    video_url?: boolean
  }, ExtArgs["result"]["produtos"]>

  export type produtosSelectScalar = {
    id?: boolean
    nome?: boolean
    codigo?: boolean
    foto_url?: boolean
    video_url?: boolean
  }

  export type produtosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "codigo" | "foto_url" | "video_url", ExtArgs["result"]["produtos"]>
  export type produtosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carros?: boolean | produtos$carrosArgs<ExtArgs>
    _count?: boolean | ProdutosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produtosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type produtosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $produtosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produtos"
    objects: {
      carros: Prisma.$carro_produtosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nome: string | null
      codigo: string | null
      foto_url: string | null
      video_url: string | null
    }, ExtArgs["result"]["produtos"]>
    composites: {}
  }

  type produtosGetPayload<S extends boolean | null | undefined | produtosDefaultArgs> = $Result.GetResult<Prisma.$produtosPayload, S>

  type produtosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produtosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutosCountAggregateInputType | true
    }

  export interface produtosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produtos'], meta: { name: 'produtos' } }
    /**
     * Find zero or one Produtos that matches the filter.
     * @param {produtosFindUniqueArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produtosFindUniqueArgs>(args: SelectSubset<T, produtosFindUniqueArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produtos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produtosFindUniqueOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produtosFindUniqueOrThrowArgs>(args: SelectSubset<T, produtosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produtosFindFirstArgs>(args?: SelectSubset<T, produtosFindFirstArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindFirstOrThrowArgs} args - Arguments to find a Produtos
     * @example
     * // Get one Produtos
     * const produtos = await prisma.produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produtosFindFirstOrThrowArgs>(args?: SelectSubset<T, produtosFindFirstOrThrowArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produtos.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produtos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtosWithIdOnly = await prisma.produtos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produtosFindManyArgs>(args?: SelectSubset<T, produtosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produtos.
     * @param {produtosCreateArgs} args - Arguments to create a Produtos.
     * @example
     * // Create one Produtos
     * const Produtos = await prisma.produtos.create({
     *   data: {
     *     // ... data to create a Produtos
     *   }
     * })
     * 
     */
    create<T extends produtosCreateArgs>(args: SelectSubset<T, produtosCreateArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {produtosCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produtosCreateManyArgs>(args?: SelectSubset<T, produtosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {produtosCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produtos = await prisma.produtos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtosWithIdOnly = await prisma.produtos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produtosCreateManyAndReturnArgs>(args?: SelectSubset<T, produtosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produtos.
     * @param {produtosDeleteArgs} args - Arguments to delete one Produtos.
     * @example
     * // Delete one Produtos
     * const Produtos = await prisma.produtos.delete({
     *   where: {
     *     // ... filter to delete one Produtos
     *   }
     * })
     * 
     */
    delete<T extends produtosDeleteArgs>(args: SelectSubset<T, produtosDeleteArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produtos.
     * @param {produtosUpdateArgs} args - Arguments to update one Produtos.
     * @example
     * // Update one Produtos
     * const produtos = await prisma.produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produtosUpdateArgs>(args: SelectSubset<T, produtosUpdateArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {produtosDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produtosDeleteManyArgs>(args?: SelectSubset<T, produtosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produtosUpdateManyArgs>(args: SelectSubset<T, produtosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {produtosUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produtos = await prisma.produtos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtosWithIdOnly = await prisma.produtos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends produtosUpdateManyAndReturnArgs>(args: SelectSubset<T, produtosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produtos.
     * @param {produtosUpsertArgs} args - Arguments to update or create a Produtos.
     * @example
     * // Update or create a Produtos
     * const produtos = await prisma.produtos.upsert({
     *   create: {
     *     // ... data to create a Produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produtos we want to update
     *   }
     * })
     */
    upsert<T extends produtosUpsertArgs>(args: SelectSubset<T, produtosUpsertArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produtos.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends produtosCountArgs>(
      args?: Subset<T, produtosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutosAggregateArgs>(args: Subset<T, ProdutosAggregateArgs>): Prisma.PrismaPromise<GetProdutosAggregateType<T>>

    /**
     * Group by Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produtosGroupByArgs} args - Group by arguments.
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
      T extends produtosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produtosGroupByArgs['orderBy'] }
        : { orderBy?: produtosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produtosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produtos model
   */
  readonly fields: produtosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produtosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carros<T extends produtos$carrosArgs<ExtArgs> = {}>(args?: Subset<T, produtos$carrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the produtos model
   */
  interface produtosFieldRefs {
    readonly id: FieldRef<"produtos", 'BigInt'>
    readonly nome: FieldRef<"produtos", 'String'>
    readonly codigo: FieldRef<"produtos", 'String'>
    readonly foto_url: FieldRef<"produtos", 'String'>
    readonly video_url: FieldRef<"produtos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produtos findUnique
   */
  export type produtosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findUniqueOrThrow
   */
  export type produtosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos findFirst
   */
  export type produtosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findFirstOrThrow
   */
  export type produtosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produtos.
     */
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos findMany
   */
  export type produtosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter, which produtos to fetch.
     */
    where?: produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produtos to fetch.
     */
    orderBy?: produtosOrderByWithRelationInput | produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produtos.
     */
    cursor?: produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produtos.
     */
    skip?: number
    distinct?: ProdutosScalarFieldEnum | ProdutosScalarFieldEnum[]
  }

  /**
   * produtos create
   */
  export type produtosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The data needed to create a produtos.
     */
    data?: XOR<produtosCreateInput, produtosUncheckedCreateInput>
  }

  /**
   * produtos createMany
   */
  export type produtosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produtos.
     */
    data: produtosCreateManyInput | produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produtos createManyAndReturn
   */
  export type produtosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * The data used to create many produtos.
     */
    data: produtosCreateManyInput | produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produtos update
   */
  export type produtosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The data needed to update a produtos.
     */
    data: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
    /**
     * Choose, which produtos to update.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos updateMany
   */
  export type produtosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produtos.
     */
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produtos updateManyAndReturn
   */
  export type produtosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * The data used to update produtos.
     */
    data: XOR<produtosUpdateManyMutationInput, produtosUncheckedUpdateManyInput>
    /**
     * Filter which produtos to update
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to update.
     */
    limit?: number
  }

  /**
   * produtos upsert
   */
  export type produtosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * The filter to search for the produtos to update in case it exists.
     */
    where: produtosWhereUniqueInput
    /**
     * In case the produtos found by the `where` argument doesn't exist, create a new produtos with this data.
     */
    create: XOR<produtosCreateInput, produtosUncheckedCreateInput>
    /**
     * In case the produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produtosUpdateInput, produtosUncheckedUpdateInput>
  }

  /**
   * produtos delete
   */
  export type produtosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
    /**
     * Filter which produtos to delete.
     */
    where: produtosWhereUniqueInput
  }

  /**
   * produtos deleteMany
   */
  export type produtosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produtos to delete
     */
    where?: produtosWhereInput
    /**
     * Limit how many produtos to delete.
     */
    limit?: number
  }

  /**
   * produtos.carros
   */
  export type produtos$carrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    where?: carro_produtosWhereInput
    orderBy?: carro_produtosOrderByWithRelationInput | carro_produtosOrderByWithRelationInput[]
    cursor?: carro_produtosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Carro_produtosScalarFieldEnum | Carro_produtosScalarFieldEnum[]
  }

  /**
   * produtos without action
   */
  export type produtosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produtos
     */
    select?: produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produtos
     */
    omit?: produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produtosInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    trocar_senha: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: bigint | null
    trocar_senha: bigint | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    senha: string | null
    nome: string | null
    email: string | null
    permissao: string | null
    cpf: string | null
    telefone: string | null
    trocar_senha: bigint | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    senha: string | null
    nome: string | null
    email: string | null
    permissao: string | null
    cpf: string | null
    telefone: string | null
    trocar_senha: bigint | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    username: number
    senha: number
    nome: number
    email: number
    permissao: number
    cpf: number
    telefone: number
    trocar_senha: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    trocar_senha?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    trocar_senha?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    username?: true
    senha?: true
    nome?: true
    email?: true
    permissao?: true
    cpf?: true
    telefone?: true
    trocar_senha?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    username?: true
    senha?: true
    nome?: true
    email?: true
    permissao?: true
    cpf?: true
    telefone?: true
    trocar_senha?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    username?: true
    senha?: true
    nome?: true
    email?: true
    permissao?: true
    cpf?: true
    telefone?: true
    trocar_senha?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: bigint
    username: string | null
    senha: string | null
    nome: string | null
    email: string | null
    permissao: string | null
    cpf: string | null
    telefone: string | null
    trocar_senha: bigint | null
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    email?: boolean
    permissao?: boolean
    cpf?: boolean
    telefone?: boolean
    trocar_senha?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    email?: boolean
    permissao?: boolean
    cpf?: boolean
    telefone?: boolean
    trocar_senha?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    email?: boolean
    permissao?: boolean
    cpf?: boolean
    telefone?: boolean
    trocar_senha?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    username?: boolean
    senha?: boolean
    nome?: boolean
    email?: boolean
    permissao?: boolean
    cpf?: boolean
    telefone?: boolean
    trocar_senha?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "senha" | "nome" | "email" | "permissao" | "cpf" | "telefone" | "trocar_senha", ExtArgs["result"]["usuarios"]>

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      username: string | null
      senha: string | null
      nome: string | null
      email: string | null
      permissao: string | null
      cpf: string | null
      telefone: string | null
      trocar_senha: bigint | null
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'BigInt'>
    readonly username: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly permissao: FieldRef<"usuarios", 'String'>
    readonly cpf: FieldRef<"usuarios", 'String'>
    readonly telefone: FieldRef<"usuarios", 'String'>
    readonly trocar_senha: FieldRef<"usuarios", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data?: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
  }


  /**
   * Model videos
   */

  export type AggregateVideos = {
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  export type VideosAvgAggregateOutputType = {
    id: number | null
  }

  export type VideosSumAggregateOutputType = {
    id: bigint | null
  }

  export type VideosMinAggregateOutputType = {
    id: bigint | null
    titulo: string | null
    descricao: string | null
    url: string | null
  }

  export type VideosMaxAggregateOutputType = {
    id: bigint | null
    titulo: string | null
    descricao: string | null
    url: string | null
  }

  export type VideosCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    url: number
    _all: number
  }


  export type VideosAvgAggregateInputType = {
    id?: true
  }

  export type VideosSumAggregateInputType = {
    id?: true
  }

  export type VideosMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    url?: true
  }

  export type VideosMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    url?: true
  }

  export type VideosCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    url?: true
    _all?: true
  }

  export type VideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to aggregate.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos
    **/
    _count?: true | VideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideosMaxAggregateInputType
  }

  export type GetVideosAggregateType<T extends VideosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos[P]>
      : GetScalarType<T[P], AggregateVideos[P]>
  }




  export type videosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
    orderBy?: videosOrderByWithAggregationInput | videosOrderByWithAggregationInput[]
    by: VideosScalarFieldEnum[] | VideosScalarFieldEnum
    having?: videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideosCountAggregateInputType | true
    _avg?: VideosAvgAggregateInputType
    _sum?: VideosSumAggregateInputType
    _min?: VideosMinAggregateInputType
    _max?: VideosMaxAggregateInputType
  }

  export type VideosGroupByOutputType = {
    id: bigint
    titulo: string | null
    descricao: string | null
    url: string | null
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  type GetVideosGroupByPayload<T extends videosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideosGroupByOutputType[P]>
            : GetScalarType<T[P], VideosGroupByOutputType[P]>
        }
      >
    >


  export type videosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }, ExtArgs["result"]["videos"]>

  export type videosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }, ExtArgs["result"]["videos"]>

  export type videosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }, ExtArgs["result"]["videos"]>

  export type videosSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }

  export type videosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "url", ExtArgs["result"]["videos"]>

  export type $videosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      titulo: string | null
      descricao: string | null
      url: string | null
    }, ExtArgs["result"]["videos"]>
    composites: {}
  }

  type videosGetPayload<S extends boolean | null | undefined | videosDefaultArgs> = $Result.GetResult<Prisma.$videosPayload, S>

  type videosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideosCountAggregateInputType | true
    }

  export interface videosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videos'], meta: { name: 'videos' } }
    /**
     * Find zero or one Videos that matches the filter.
     * @param {videosFindUniqueArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videosFindUniqueArgs>(args: SelectSubset<T, videosFindUniqueArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videosFindUniqueOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videosFindUniqueOrThrowArgs>(args: SelectSubset<T, videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videosFindFirstArgs>(args?: SelectSubset<T, videosFindFirstArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videosFindFirstOrThrowArgs>(args?: SelectSubset<T, videosFindFirstOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.videos.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videosWithIdOnly = await prisma.videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videosFindManyArgs>(args?: SelectSubset<T, videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videos.
     * @param {videosCreateArgs} args - Arguments to create a Videos.
     * @example
     * // Create one Videos
     * const Videos = await prisma.videos.create({
     *   data: {
     *     // ... data to create a Videos
     *   }
     * })
     * 
     */
    create<T extends videosCreateArgs>(args: SelectSubset<T, videosCreateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {videosCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videosCreateManyArgs>(args?: SelectSubset<T, videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {videosCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videosCreateManyAndReturnArgs>(args?: SelectSubset<T, videosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videos.
     * @param {videosDeleteArgs} args - Arguments to delete one Videos.
     * @example
     * // Delete one Videos
     * const Videos = await prisma.videos.delete({
     *   where: {
     *     // ... filter to delete one Videos
     *   }
     * })
     * 
     */
    delete<T extends videosDeleteArgs>(args: SelectSubset<T, videosDeleteArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videos.
     * @param {videosUpdateArgs} args - Arguments to update one Videos.
     * @example
     * // Update one Videos
     * const videos = await prisma.videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videosUpdateArgs>(args: SelectSubset<T, videosUpdateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {videosDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videosDeleteManyArgs>(args?: SelectSubset<T, videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videosUpdateManyArgs>(args: SelectSubset<T, videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {videosUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videosWithIdOnly = await prisma.videos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends videosUpdateManyAndReturnArgs>(args: SelectSubset<T, videosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videos.
     * @param {videosUpsertArgs} args - Arguments to update or create a Videos.
     * @example
     * // Update or create a Videos
     * const videos = await prisma.videos.upsert({
     *   create: {
     *     // ... data to create a Videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos we want to update
     *   }
     * })
     */
    upsert<T extends videosUpsertArgs>(args: SelectSubset<T, videosUpsertArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.videos.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends videosCountArgs>(
      args?: Subset<T, videosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideosAggregateArgs>(args: Subset<T, VideosAggregateArgs>): Prisma.PrismaPromise<GetVideosAggregateType<T>>

    /**
     * Group by Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosGroupByArgs} args - Group by arguments.
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
      T extends videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videosGroupByArgs['orderBy'] }
        : { orderBy?: videosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videos model
   */
  readonly fields: videosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the videos model
   */
  interface videosFieldRefs {
    readonly id: FieldRef<"videos", 'BigInt'>
    readonly titulo: FieldRef<"videos", 'String'>
    readonly descricao: FieldRef<"videos", 'String'>
    readonly url: FieldRef<"videos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * videos findUnique
   */
  export type videosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findUniqueOrThrow
   */
  export type videosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findFirst
   */
  export type videosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findFirstOrThrow
   */
  export type videosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findMany
   */
  export type videosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos create
   */
  export type videosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data needed to create a videos.
     */
    data?: XOR<videosCreateInput, videosUncheckedCreateInput>
  }

  /**
   * videos createMany
   */
  export type videosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos createManyAndReturn
   */
  export type videosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos update
   */
  export type videosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data needed to update a videos.
     */
    data: XOR<videosUpdateInput, videosUncheckedUpdateInput>
    /**
     * Choose, which videos to update.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos updateMany
   */
  export type videosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
  }

  /**
   * videos updateManyAndReturn
   */
  export type videosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to update.
     */
    limit?: number
  }

  /**
   * videos upsert
   */
  export type videosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * The filter to search for the videos to update in case it exists.
     */
    where: videosWhereUniqueInput
    /**
     * In case the videos found by the `where` argument doesn't exist, create a new videos with this data.
     */
    create: XOR<videosCreateInput, videosUncheckedCreateInput>
    /**
     * In case the videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videosUpdateInput, videosUncheckedUpdateInput>
  }

  /**
   * videos delete
   */
  export type videosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
    /**
     * Filter which videos to delete.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos deleteMany
   */
  export type videosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videosWhereInput
    /**
     * Limit how many videos to delete.
     */
    limit?: number
  }

  /**
   * videos without action
   */
  export type videosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos
     */
    omit?: videosOmit<ExtArgs> | null
  }


  /**
   * Model videos_assistidos
   */

  export type AggregateVideos_assistidos = {
    _count: Videos_assistidosCountAggregateOutputType | null
    _avg: Videos_assistidosAvgAggregateOutputType | null
    _sum: Videos_assistidosSumAggregateOutputType | null
    _min: Videos_assistidosMinAggregateOutputType | null
    _max: Videos_assistidosMaxAggregateOutputType | null
  }

  export type Videos_assistidosAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
    video_id: number | null
  }

  export type Videos_assistidosSumAggregateOutputType = {
    id: bigint | null
    usuario_id: bigint | null
    video_id: bigint | null
  }

  export type Videos_assistidosMinAggregateOutputType = {
    id: bigint | null
    usuario_id: bigint | null
    video_id: bigint | null
    data_assistido: Date | null
  }

  export type Videos_assistidosMaxAggregateOutputType = {
    id: bigint | null
    usuario_id: bigint | null
    video_id: bigint | null
    data_assistido: Date | null
  }

  export type Videos_assistidosCountAggregateOutputType = {
    id: number
    usuario_id: number
    video_id: number
    data_assistido: number
    _all: number
  }


  export type Videos_assistidosAvgAggregateInputType = {
    id?: true
    usuario_id?: true
    video_id?: true
  }

  export type Videos_assistidosSumAggregateInputType = {
    id?: true
    usuario_id?: true
    video_id?: true
  }

  export type Videos_assistidosMinAggregateInputType = {
    id?: true
    usuario_id?: true
    video_id?: true
    data_assistido?: true
  }

  export type Videos_assistidosMaxAggregateInputType = {
    id?: true
    usuario_id?: true
    video_id?: true
    data_assistido?: true
  }

  export type Videos_assistidosCountAggregateInputType = {
    id?: true
    usuario_id?: true
    video_id?: true
    data_assistido?: true
    _all?: true
  }

  export type Videos_assistidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos_assistidos to aggregate.
     */
    where?: videos_assistidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_assistidos to fetch.
     */
    orderBy?: videos_assistidosOrderByWithRelationInput | videos_assistidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videos_assistidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_assistidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_assistidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos_assistidos
    **/
    _count?: true | Videos_assistidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Videos_assistidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Videos_assistidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Videos_assistidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Videos_assistidosMaxAggregateInputType
  }

  export type GetVideos_assistidosAggregateType<T extends Videos_assistidosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos_assistidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos_assistidos[P]>
      : GetScalarType<T[P], AggregateVideos_assistidos[P]>
  }




  export type videos_assistidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videos_assistidosWhereInput
    orderBy?: videos_assistidosOrderByWithAggregationInput | videos_assistidosOrderByWithAggregationInput[]
    by: Videos_assistidosScalarFieldEnum[] | Videos_assistidosScalarFieldEnum
    having?: videos_assistidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Videos_assistidosCountAggregateInputType | true
    _avg?: Videos_assistidosAvgAggregateInputType
    _sum?: Videos_assistidosSumAggregateInputType
    _min?: Videos_assistidosMinAggregateInputType
    _max?: Videos_assistidosMaxAggregateInputType
  }

  export type Videos_assistidosGroupByOutputType = {
    id: bigint
    usuario_id: bigint | null
    video_id: bigint | null
    data_assistido: Date | null
    _count: Videos_assistidosCountAggregateOutputType | null
    _avg: Videos_assistidosAvgAggregateOutputType | null
    _sum: Videos_assistidosSumAggregateOutputType | null
    _min: Videos_assistidosMinAggregateOutputType | null
    _max: Videos_assistidosMaxAggregateOutputType | null
  }

  type GetVideos_assistidosGroupByPayload<T extends videos_assistidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Videos_assistidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Videos_assistidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Videos_assistidosGroupByOutputType[P]>
            : GetScalarType<T[P], Videos_assistidosGroupByOutputType[P]>
        }
      >
    >


  export type videos_assistidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    video_id?: boolean
    data_assistido?: boolean
  }, ExtArgs["result"]["videos_assistidos"]>

  export type videos_assistidosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    video_id?: boolean
    data_assistido?: boolean
  }, ExtArgs["result"]["videos_assistidos"]>

  export type videos_assistidosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuario_id?: boolean
    video_id?: boolean
    data_assistido?: boolean
  }, ExtArgs["result"]["videos_assistidos"]>

  export type videos_assistidosSelectScalar = {
    id?: boolean
    usuario_id?: boolean
    video_id?: boolean
    data_assistido?: boolean
  }

  export type videos_assistidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuario_id" | "video_id" | "data_assistido", ExtArgs["result"]["videos_assistidos"]>

  export type $videos_assistidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videos_assistidos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      usuario_id: bigint | null
      video_id: bigint | null
      data_assistido: Date | null
    }, ExtArgs["result"]["videos_assistidos"]>
    composites: {}
  }

  type videos_assistidosGetPayload<S extends boolean | null | undefined | videos_assistidosDefaultArgs> = $Result.GetResult<Prisma.$videos_assistidosPayload, S>

  type videos_assistidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videos_assistidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Videos_assistidosCountAggregateInputType | true
    }

  export interface videos_assistidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videos_assistidos'], meta: { name: 'videos_assistidos' } }
    /**
     * Find zero or one Videos_assistidos that matches the filter.
     * @param {videos_assistidosFindUniqueArgs} args - Arguments to find a Videos_assistidos
     * @example
     * // Get one Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videos_assistidosFindUniqueArgs>(args: SelectSubset<T, videos_assistidosFindUniqueArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videos_assistidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videos_assistidosFindUniqueOrThrowArgs} args - Arguments to find a Videos_assistidos
     * @example
     * // Get one Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videos_assistidosFindUniqueOrThrowArgs>(args: SelectSubset<T, videos_assistidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos_assistidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_assistidosFindFirstArgs} args - Arguments to find a Videos_assistidos
     * @example
     * // Get one Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videos_assistidosFindFirstArgs>(args?: SelectSubset<T, videos_assistidosFindFirstArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos_assistidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_assistidosFindFirstOrThrowArgs} args - Arguments to find a Videos_assistidos
     * @example
     * // Get one Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videos_assistidosFindFirstOrThrowArgs>(args?: SelectSubset<T, videos_assistidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos_assistidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_assistidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.findMany()
     * 
     * // Get first 10 Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videos_assistidosWithIdOnly = await prisma.videos_assistidos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videos_assistidosFindManyArgs>(args?: SelectSubset<T, videos_assistidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videos_assistidos.
     * @param {videos_assistidosCreateArgs} args - Arguments to create a Videos_assistidos.
     * @example
     * // Create one Videos_assistidos
     * const Videos_assistidos = await prisma.videos_assistidos.create({
     *   data: {
     *     // ... data to create a Videos_assistidos
     *   }
     * })
     * 
     */
    create<T extends videos_assistidosCreateArgs>(args: SelectSubset<T, videos_assistidosCreateArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos_assistidos.
     * @param {videos_assistidosCreateManyArgs} args - Arguments to create many Videos_assistidos.
     * @example
     * // Create many Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videos_assistidosCreateManyArgs>(args?: SelectSubset<T, videos_assistidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos_assistidos and returns the data saved in the database.
     * @param {videos_assistidosCreateManyAndReturnArgs} args - Arguments to create many Videos_assistidos.
     * @example
     * // Create many Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos_assistidos and only return the `id`
     * const videos_assistidosWithIdOnly = await prisma.videos_assistidos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videos_assistidosCreateManyAndReturnArgs>(args?: SelectSubset<T, videos_assistidosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videos_assistidos.
     * @param {videos_assistidosDeleteArgs} args - Arguments to delete one Videos_assistidos.
     * @example
     * // Delete one Videos_assistidos
     * const Videos_assistidos = await prisma.videos_assistidos.delete({
     *   where: {
     *     // ... filter to delete one Videos_assistidos
     *   }
     * })
     * 
     */
    delete<T extends videos_assistidosDeleteArgs>(args: SelectSubset<T, videos_assistidosDeleteArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videos_assistidos.
     * @param {videos_assistidosUpdateArgs} args - Arguments to update one Videos_assistidos.
     * @example
     * // Update one Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videos_assistidosUpdateArgs>(args: SelectSubset<T, videos_assistidosUpdateArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos_assistidos.
     * @param {videos_assistidosDeleteManyArgs} args - Arguments to filter Videos_assistidos to delete.
     * @example
     * // Delete a few Videos_assistidos
     * const { count } = await prisma.videos_assistidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videos_assistidosDeleteManyArgs>(args?: SelectSubset<T, videos_assistidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos_assistidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_assistidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videos_assistidosUpdateManyArgs>(args: SelectSubset<T, videos_assistidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos_assistidos and returns the data updated in the database.
     * @param {videos_assistidosUpdateManyAndReturnArgs} args - Arguments to update many Videos_assistidos.
     * @example
     * // Update many Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos_assistidos and only return the `id`
     * const videos_assistidosWithIdOnly = await prisma.videos_assistidos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends videos_assistidosUpdateManyAndReturnArgs>(args: SelectSubset<T, videos_assistidosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videos_assistidos.
     * @param {videos_assistidosUpsertArgs} args - Arguments to update or create a Videos_assistidos.
     * @example
     * // Update or create a Videos_assistidos
     * const videos_assistidos = await prisma.videos_assistidos.upsert({
     *   create: {
     *     // ... data to create a Videos_assistidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos_assistidos we want to update
     *   }
     * })
     */
    upsert<T extends videos_assistidosUpsertArgs>(args: SelectSubset<T, videos_assistidosUpsertArgs<ExtArgs>>): Prisma__videos_assistidosClient<$Result.GetResult<Prisma.$videos_assistidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos_assistidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_assistidosCountArgs} args - Arguments to filter Videos_assistidos to count.
     * @example
     * // Count the number of Videos_assistidos
     * const count = await prisma.videos_assistidos.count({
     *   where: {
     *     // ... the filter for the Videos_assistidos we want to count
     *   }
     * })
    **/
    count<T extends videos_assistidosCountArgs>(
      args?: Subset<T, videos_assistidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Videos_assistidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos_assistidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Videos_assistidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Videos_assistidosAggregateArgs>(args: Subset<T, Videos_assistidosAggregateArgs>): Prisma.PrismaPromise<GetVideos_assistidosAggregateType<T>>

    /**
     * Group by Videos_assistidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_assistidosGroupByArgs} args - Group by arguments.
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
      T extends videos_assistidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videos_assistidosGroupByArgs['orderBy'] }
        : { orderBy?: videos_assistidosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videos_assistidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideos_assistidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videos_assistidos model
   */
  readonly fields: videos_assistidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videos_assistidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videos_assistidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the videos_assistidos model
   */
  interface videos_assistidosFieldRefs {
    readonly id: FieldRef<"videos_assistidos", 'BigInt'>
    readonly usuario_id: FieldRef<"videos_assistidos", 'BigInt'>
    readonly video_id: FieldRef<"videos_assistidos", 'BigInt'>
    readonly data_assistido: FieldRef<"videos_assistidos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * videos_assistidos findUnique
   */
  export type videos_assistidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * Filter, which videos_assistidos to fetch.
     */
    where: videos_assistidosWhereUniqueInput
  }

  /**
   * videos_assistidos findUniqueOrThrow
   */
  export type videos_assistidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * Filter, which videos_assistidos to fetch.
     */
    where: videos_assistidosWhereUniqueInput
  }

  /**
   * videos_assistidos findFirst
   */
  export type videos_assistidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * Filter, which videos_assistidos to fetch.
     */
    where?: videos_assistidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_assistidos to fetch.
     */
    orderBy?: videos_assistidosOrderByWithRelationInput | videos_assistidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos_assistidos.
     */
    cursor?: videos_assistidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_assistidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_assistidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos_assistidos.
     */
    distinct?: Videos_assistidosScalarFieldEnum | Videos_assistidosScalarFieldEnum[]
  }

  /**
   * videos_assistidos findFirstOrThrow
   */
  export type videos_assistidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * Filter, which videos_assistidos to fetch.
     */
    where?: videos_assistidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_assistidos to fetch.
     */
    orderBy?: videos_assistidosOrderByWithRelationInput | videos_assistidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos_assistidos.
     */
    cursor?: videos_assistidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_assistidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_assistidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos_assistidos.
     */
    distinct?: Videos_assistidosScalarFieldEnum | Videos_assistidosScalarFieldEnum[]
  }

  /**
   * videos_assistidos findMany
   */
  export type videos_assistidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * Filter, which videos_assistidos to fetch.
     */
    where?: videos_assistidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_assistidos to fetch.
     */
    orderBy?: videos_assistidosOrderByWithRelationInput | videos_assistidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos_assistidos.
     */
    cursor?: videos_assistidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_assistidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_assistidos.
     */
    skip?: number
    distinct?: Videos_assistidosScalarFieldEnum | Videos_assistidosScalarFieldEnum[]
  }

  /**
   * videos_assistidos create
   */
  export type videos_assistidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * The data needed to create a videos_assistidos.
     */
    data?: XOR<videos_assistidosCreateInput, videos_assistidosUncheckedCreateInput>
  }

  /**
   * videos_assistidos createMany
   */
  export type videos_assistidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos_assistidos.
     */
    data: videos_assistidosCreateManyInput | videos_assistidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos_assistidos createManyAndReturn
   */
  export type videos_assistidosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * The data used to create many videos_assistidos.
     */
    data: videos_assistidosCreateManyInput | videos_assistidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos_assistidos update
   */
  export type videos_assistidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * The data needed to update a videos_assistidos.
     */
    data: XOR<videos_assistidosUpdateInput, videos_assistidosUncheckedUpdateInput>
    /**
     * Choose, which videos_assistidos to update.
     */
    where: videos_assistidosWhereUniqueInput
  }

  /**
   * videos_assistidos updateMany
   */
  export type videos_assistidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos_assistidos.
     */
    data: XOR<videos_assistidosUpdateManyMutationInput, videos_assistidosUncheckedUpdateManyInput>
    /**
     * Filter which videos_assistidos to update
     */
    where?: videos_assistidosWhereInput
    /**
     * Limit how many videos_assistidos to update.
     */
    limit?: number
  }

  /**
   * videos_assistidos updateManyAndReturn
   */
  export type videos_assistidosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * The data used to update videos_assistidos.
     */
    data: XOR<videos_assistidosUpdateManyMutationInput, videos_assistidosUncheckedUpdateManyInput>
    /**
     * Filter which videos_assistidos to update
     */
    where?: videos_assistidosWhereInput
    /**
     * Limit how many videos_assistidos to update.
     */
    limit?: number
  }

  /**
   * videos_assistidos upsert
   */
  export type videos_assistidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * The filter to search for the videos_assistidos to update in case it exists.
     */
    where: videos_assistidosWhereUniqueInput
    /**
     * In case the videos_assistidos found by the `where` argument doesn't exist, create a new videos_assistidos with this data.
     */
    create: XOR<videos_assistidosCreateInput, videos_assistidosUncheckedCreateInput>
    /**
     * In case the videos_assistidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videos_assistidosUpdateInput, videos_assistidosUncheckedUpdateInput>
  }

  /**
   * videos_assistidos delete
   */
  export type videos_assistidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
    /**
     * Filter which videos_assistidos to delete.
     */
    where: videos_assistidosWhereUniqueInput
  }

  /**
   * videos_assistidos deleteMany
   */
  export type videos_assistidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos_assistidos to delete
     */
    where?: videos_assistidosWhereInput
    /**
     * Limit how many videos_assistidos to delete.
     */
    limit?: number
  }

  /**
   * videos_assistidos without action
   */
  export type videos_assistidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_assistidos
     */
    select?: videos_assistidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_assistidos
     */
    omit?: videos_assistidosOmit<ExtArgs> | null
  }


  /**
   * Model videos_instalador
   */

  export type AggregateVideos_instalador = {
    _count: Videos_instaladorCountAggregateOutputType | null
    _avg: Videos_instaladorAvgAggregateOutputType | null
    _sum: Videos_instaladorSumAggregateOutputType | null
    _min: Videos_instaladorMinAggregateOutputType | null
    _max: Videos_instaladorMaxAggregateOutputType | null
  }

  export type Videos_instaladorAvgAggregateOutputType = {
    id: number | null
  }

  export type Videos_instaladorSumAggregateOutputType = {
    id: bigint | null
  }

  export type Videos_instaladorMinAggregateOutputType = {
    id: bigint | null
    titulo: string | null
    descricao: string | null
    url: string | null
  }

  export type Videos_instaladorMaxAggregateOutputType = {
    id: bigint | null
    titulo: string | null
    descricao: string | null
    url: string | null
  }

  export type Videos_instaladorCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    url: number
    _all: number
  }


  export type Videos_instaladorAvgAggregateInputType = {
    id?: true
  }

  export type Videos_instaladorSumAggregateInputType = {
    id?: true
  }

  export type Videos_instaladorMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    url?: true
  }

  export type Videos_instaladorMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    url?: true
  }

  export type Videos_instaladorCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    url?: true
    _all?: true
  }

  export type Videos_instaladorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos_instalador to aggregate.
     */
    where?: videos_instaladorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_instaladors to fetch.
     */
    orderBy?: videos_instaladorOrderByWithRelationInput | videos_instaladorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videos_instaladorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_instaladors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_instaladors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos_instaladors
    **/
    _count?: true | Videos_instaladorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Videos_instaladorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Videos_instaladorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Videos_instaladorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Videos_instaladorMaxAggregateInputType
  }

  export type GetVideos_instaladorAggregateType<T extends Videos_instaladorAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos_instalador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos_instalador[P]>
      : GetScalarType<T[P], AggregateVideos_instalador[P]>
  }




  export type videos_instaladorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videos_instaladorWhereInput
    orderBy?: videos_instaladorOrderByWithAggregationInput | videos_instaladorOrderByWithAggregationInput[]
    by: Videos_instaladorScalarFieldEnum[] | Videos_instaladorScalarFieldEnum
    having?: videos_instaladorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Videos_instaladorCountAggregateInputType | true
    _avg?: Videos_instaladorAvgAggregateInputType
    _sum?: Videos_instaladorSumAggregateInputType
    _min?: Videos_instaladorMinAggregateInputType
    _max?: Videos_instaladorMaxAggregateInputType
  }

  export type Videos_instaladorGroupByOutputType = {
    id: bigint
    titulo: string | null
    descricao: string | null
    url: string | null
    _count: Videos_instaladorCountAggregateOutputType | null
    _avg: Videos_instaladorAvgAggregateOutputType | null
    _sum: Videos_instaladorSumAggregateOutputType | null
    _min: Videos_instaladorMinAggregateOutputType | null
    _max: Videos_instaladorMaxAggregateOutputType | null
  }

  type GetVideos_instaladorGroupByPayload<T extends videos_instaladorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Videos_instaladorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Videos_instaladorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Videos_instaladorGroupByOutputType[P]>
            : GetScalarType<T[P], Videos_instaladorGroupByOutputType[P]>
        }
      >
    >


  export type videos_instaladorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }, ExtArgs["result"]["videos_instalador"]>

  export type videos_instaladorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }, ExtArgs["result"]["videos_instalador"]>

  export type videos_instaladorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }, ExtArgs["result"]["videos_instalador"]>

  export type videos_instaladorSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    url?: boolean
  }

  export type videos_instaladorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "url", ExtArgs["result"]["videos_instalador"]>

  export type $videos_instaladorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videos_instalador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      titulo: string | null
      descricao: string | null
      url: string | null
    }, ExtArgs["result"]["videos_instalador"]>
    composites: {}
  }

  type videos_instaladorGetPayload<S extends boolean | null | undefined | videos_instaladorDefaultArgs> = $Result.GetResult<Prisma.$videos_instaladorPayload, S>

  type videos_instaladorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<videos_instaladorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Videos_instaladorCountAggregateInputType | true
    }

  export interface videos_instaladorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videos_instalador'], meta: { name: 'videos_instalador' } }
    /**
     * Find zero or one Videos_instalador that matches the filter.
     * @param {videos_instaladorFindUniqueArgs} args - Arguments to find a Videos_instalador
     * @example
     * // Get one Videos_instalador
     * const videos_instalador = await prisma.videos_instalador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videos_instaladorFindUniqueArgs>(args: SelectSubset<T, videos_instaladorFindUniqueArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Videos_instalador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {videos_instaladorFindUniqueOrThrowArgs} args - Arguments to find a Videos_instalador
     * @example
     * // Get one Videos_instalador
     * const videos_instalador = await prisma.videos_instalador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videos_instaladorFindUniqueOrThrowArgs>(args: SelectSubset<T, videos_instaladorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos_instalador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_instaladorFindFirstArgs} args - Arguments to find a Videos_instalador
     * @example
     * // Get one Videos_instalador
     * const videos_instalador = await prisma.videos_instalador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videos_instaladorFindFirstArgs>(args?: SelectSubset<T, videos_instaladorFindFirstArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Videos_instalador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_instaladorFindFirstOrThrowArgs} args - Arguments to find a Videos_instalador
     * @example
     * // Get one Videos_instalador
     * const videos_instalador = await prisma.videos_instalador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videos_instaladorFindFirstOrThrowArgs>(args?: SelectSubset<T, videos_instaladorFindFirstOrThrowArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos_instaladors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_instaladorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos_instaladors
     * const videos_instaladors = await prisma.videos_instalador.findMany()
     * 
     * // Get first 10 Videos_instaladors
     * const videos_instaladors = await prisma.videos_instalador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videos_instaladorWithIdOnly = await prisma.videos_instalador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videos_instaladorFindManyArgs>(args?: SelectSubset<T, videos_instaladorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Videos_instalador.
     * @param {videos_instaladorCreateArgs} args - Arguments to create a Videos_instalador.
     * @example
     * // Create one Videos_instalador
     * const Videos_instalador = await prisma.videos_instalador.create({
     *   data: {
     *     // ... data to create a Videos_instalador
     *   }
     * })
     * 
     */
    create<T extends videos_instaladorCreateArgs>(args: SelectSubset<T, videos_instaladorCreateArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos_instaladors.
     * @param {videos_instaladorCreateManyArgs} args - Arguments to create many Videos_instaladors.
     * @example
     * // Create many Videos_instaladors
     * const videos_instalador = await prisma.videos_instalador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videos_instaladorCreateManyArgs>(args?: SelectSubset<T, videos_instaladorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos_instaladors and returns the data saved in the database.
     * @param {videos_instaladorCreateManyAndReturnArgs} args - Arguments to create many Videos_instaladors.
     * @example
     * // Create many Videos_instaladors
     * const videos_instalador = await prisma.videos_instalador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos_instaladors and only return the `id`
     * const videos_instaladorWithIdOnly = await prisma.videos_instalador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends videos_instaladorCreateManyAndReturnArgs>(args?: SelectSubset<T, videos_instaladorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Videos_instalador.
     * @param {videos_instaladorDeleteArgs} args - Arguments to delete one Videos_instalador.
     * @example
     * // Delete one Videos_instalador
     * const Videos_instalador = await prisma.videos_instalador.delete({
     *   where: {
     *     // ... filter to delete one Videos_instalador
     *   }
     * })
     * 
     */
    delete<T extends videos_instaladorDeleteArgs>(args: SelectSubset<T, videos_instaladorDeleteArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Videos_instalador.
     * @param {videos_instaladorUpdateArgs} args - Arguments to update one Videos_instalador.
     * @example
     * // Update one Videos_instalador
     * const videos_instalador = await prisma.videos_instalador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videos_instaladorUpdateArgs>(args: SelectSubset<T, videos_instaladorUpdateArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos_instaladors.
     * @param {videos_instaladorDeleteManyArgs} args - Arguments to filter Videos_instaladors to delete.
     * @example
     * // Delete a few Videos_instaladors
     * const { count } = await prisma.videos_instalador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videos_instaladorDeleteManyArgs>(args?: SelectSubset<T, videos_instaladorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos_instaladors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_instaladorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos_instaladors
     * const videos_instalador = await prisma.videos_instalador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videos_instaladorUpdateManyArgs>(args: SelectSubset<T, videos_instaladorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos_instaladors and returns the data updated in the database.
     * @param {videos_instaladorUpdateManyAndReturnArgs} args - Arguments to update many Videos_instaladors.
     * @example
     * // Update many Videos_instaladors
     * const videos_instalador = await prisma.videos_instalador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos_instaladors and only return the `id`
     * const videos_instaladorWithIdOnly = await prisma.videos_instalador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends videos_instaladorUpdateManyAndReturnArgs>(args: SelectSubset<T, videos_instaladorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Videos_instalador.
     * @param {videos_instaladorUpsertArgs} args - Arguments to update or create a Videos_instalador.
     * @example
     * // Update or create a Videos_instalador
     * const videos_instalador = await prisma.videos_instalador.upsert({
     *   create: {
     *     // ... data to create a Videos_instalador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos_instalador we want to update
     *   }
     * })
     */
    upsert<T extends videos_instaladorUpsertArgs>(args: SelectSubset<T, videos_instaladorUpsertArgs<ExtArgs>>): Prisma__videos_instaladorClient<$Result.GetResult<Prisma.$videos_instaladorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos_instaladors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_instaladorCountArgs} args - Arguments to filter Videos_instaladors to count.
     * @example
     * // Count the number of Videos_instaladors
     * const count = await prisma.videos_instalador.count({
     *   where: {
     *     // ... the filter for the Videos_instaladors we want to count
     *   }
     * })
    **/
    count<T extends videos_instaladorCountArgs>(
      args?: Subset<T, videos_instaladorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Videos_instaladorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos_instalador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Videos_instaladorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Videos_instaladorAggregateArgs>(args: Subset<T, Videos_instaladorAggregateArgs>): Prisma.PrismaPromise<GetVideos_instaladorAggregateType<T>>

    /**
     * Group by Videos_instalador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videos_instaladorGroupByArgs} args - Group by arguments.
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
      T extends videos_instaladorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videos_instaladorGroupByArgs['orderBy'] }
        : { orderBy?: videos_instaladorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videos_instaladorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideos_instaladorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videos_instalador model
   */
  readonly fields: videos_instaladorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videos_instalador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videos_instaladorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the videos_instalador model
   */
  interface videos_instaladorFieldRefs {
    readonly id: FieldRef<"videos_instalador", 'BigInt'>
    readonly titulo: FieldRef<"videos_instalador", 'String'>
    readonly descricao: FieldRef<"videos_instalador", 'String'>
    readonly url: FieldRef<"videos_instalador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * videos_instalador findUnique
   */
  export type videos_instaladorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * Filter, which videos_instalador to fetch.
     */
    where: videos_instaladorWhereUniqueInput
  }

  /**
   * videos_instalador findUniqueOrThrow
   */
  export type videos_instaladorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * Filter, which videos_instalador to fetch.
     */
    where: videos_instaladorWhereUniqueInput
  }

  /**
   * videos_instalador findFirst
   */
  export type videos_instaladorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * Filter, which videos_instalador to fetch.
     */
    where?: videos_instaladorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_instaladors to fetch.
     */
    orderBy?: videos_instaladorOrderByWithRelationInput | videos_instaladorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos_instaladors.
     */
    cursor?: videos_instaladorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_instaladors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_instaladors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos_instaladors.
     */
    distinct?: Videos_instaladorScalarFieldEnum | Videos_instaladorScalarFieldEnum[]
  }

  /**
   * videos_instalador findFirstOrThrow
   */
  export type videos_instaladorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * Filter, which videos_instalador to fetch.
     */
    where?: videos_instaladorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_instaladors to fetch.
     */
    orderBy?: videos_instaladorOrderByWithRelationInput | videos_instaladorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos_instaladors.
     */
    cursor?: videos_instaladorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_instaladors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_instaladors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos_instaladors.
     */
    distinct?: Videos_instaladorScalarFieldEnum | Videos_instaladorScalarFieldEnum[]
  }

  /**
   * videos_instalador findMany
   */
  export type videos_instaladorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * Filter, which videos_instaladors to fetch.
     */
    where?: videos_instaladorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos_instaladors to fetch.
     */
    orderBy?: videos_instaladorOrderByWithRelationInput | videos_instaladorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos_instaladors.
     */
    cursor?: videos_instaladorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos_instaladors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos_instaladors.
     */
    skip?: number
    distinct?: Videos_instaladorScalarFieldEnum | Videos_instaladorScalarFieldEnum[]
  }

  /**
   * videos_instalador create
   */
  export type videos_instaladorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * The data needed to create a videos_instalador.
     */
    data?: XOR<videos_instaladorCreateInput, videos_instaladorUncheckedCreateInput>
  }

  /**
   * videos_instalador createMany
   */
  export type videos_instaladorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos_instaladors.
     */
    data: videos_instaladorCreateManyInput | videos_instaladorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos_instalador createManyAndReturn
   */
  export type videos_instaladorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * The data used to create many videos_instaladors.
     */
    data: videos_instaladorCreateManyInput | videos_instaladorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos_instalador update
   */
  export type videos_instaladorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * The data needed to update a videos_instalador.
     */
    data: XOR<videos_instaladorUpdateInput, videos_instaladorUncheckedUpdateInput>
    /**
     * Choose, which videos_instalador to update.
     */
    where: videos_instaladorWhereUniqueInput
  }

  /**
   * videos_instalador updateMany
   */
  export type videos_instaladorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos_instaladors.
     */
    data: XOR<videos_instaladorUpdateManyMutationInput, videos_instaladorUncheckedUpdateManyInput>
    /**
     * Filter which videos_instaladors to update
     */
    where?: videos_instaladorWhereInput
    /**
     * Limit how many videos_instaladors to update.
     */
    limit?: number
  }

  /**
   * videos_instalador updateManyAndReturn
   */
  export type videos_instaladorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * The data used to update videos_instaladors.
     */
    data: XOR<videos_instaladorUpdateManyMutationInput, videos_instaladorUncheckedUpdateManyInput>
    /**
     * Filter which videos_instaladors to update
     */
    where?: videos_instaladorWhereInput
    /**
     * Limit how many videos_instaladors to update.
     */
    limit?: number
  }

  /**
   * videos_instalador upsert
   */
  export type videos_instaladorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * The filter to search for the videos_instalador to update in case it exists.
     */
    where: videos_instaladorWhereUniqueInput
    /**
     * In case the videos_instalador found by the `where` argument doesn't exist, create a new videos_instalador with this data.
     */
    create: XOR<videos_instaladorCreateInput, videos_instaladorUncheckedCreateInput>
    /**
     * In case the videos_instalador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videos_instaladorUpdateInput, videos_instaladorUncheckedUpdateInput>
  }

  /**
   * videos_instalador delete
   */
  export type videos_instaladorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
    /**
     * Filter which videos_instalador to delete.
     */
    where: videos_instaladorWhereUniqueInput
  }

  /**
   * videos_instalador deleteMany
   */
  export type videos_instaladorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos_instaladors to delete
     */
    where?: videos_instaladorWhereInput
    /**
     * Limit how many videos_instaladors to delete.
     */
    limit?: number
  }

  /**
   * videos_instalador without action
   */
  export type videos_instaladorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos_instalador
     */
    select?: videos_instaladorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the videos_instalador
     */
    omit?: videos_instaladorOmit<ExtArgs> | null
  }


  /**
   * Model carro_produtos
   */

  export type AggregateCarro_produtos = {
    _count: Carro_produtosCountAggregateOutputType | null
    _avg: Carro_produtosAvgAggregateOutputType | null
    _sum: Carro_produtosSumAggregateOutputType | null
    _min: Carro_produtosMinAggregateOutputType | null
    _max: Carro_produtosMaxAggregateOutputType | null
  }

  export type Carro_produtosAvgAggregateOutputType = {
    carro_id: number | null
    produto_id: number | null
  }

  export type Carro_produtosSumAggregateOutputType = {
    carro_id: bigint | null
    produto_id: bigint | null
  }

  export type Carro_produtosMinAggregateOutputType = {
    carro_id: bigint | null
    produto_id: bigint | null
  }

  export type Carro_produtosMaxAggregateOutputType = {
    carro_id: bigint | null
    produto_id: bigint | null
  }

  export type Carro_produtosCountAggregateOutputType = {
    carro_id: number
    produto_id: number
    _all: number
  }


  export type Carro_produtosAvgAggregateInputType = {
    carro_id?: true
    produto_id?: true
  }

  export type Carro_produtosSumAggregateInputType = {
    carro_id?: true
    produto_id?: true
  }

  export type Carro_produtosMinAggregateInputType = {
    carro_id?: true
    produto_id?: true
  }

  export type Carro_produtosMaxAggregateInputType = {
    carro_id?: true
    produto_id?: true
  }

  export type Carro_produtosCountAggregateInputType = {
    carro_id?: true
    produto_id?: true
    _all?: true
  }

  export type Carro_produtosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carro_produtos to aggregate.
     */
    where?: carro_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carro_produtos to fetch.
     */
    orderBy?: carro_produtosOrderByWithRelationInput | carro_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carro_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carro_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carro_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carro_produtos
    **/
    _count?: true | Carro_produtosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Carro_produtosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Carro_produtosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Carro_produtosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Carro_produtosMaxAggregateInputType
  }

  export type GetCarro_produtosAggregateType<T extends Carro_produtosAggregateArgs> = {
        [P in keyof T & keyof AggregateCarro_produtos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarro_produtos[P]>
      : GetScalarType<T[P], AggregateCarro_produtos[P]>
  }




  export type carro_produtosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carro_produtosWhereInput
    orderBy?: carro_produtosOrderByWithAggregationInput | carro_produtosOrderByWithAggregationInput[]
    by: Carro_produtosScalarFieldEnum[] | Carro_produtosScalarFieldEnum
    having?: carro_produtosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Carro_produtosCountAggregateInputType | true
    _avg?: Carro_produtosAvgAggregateInputType
    _sum?: Carro_produtosSumAggregateInputType
    _min?: Carro_produtosMinAggregateInputType
    _max?: Carro_produtosMaxAggregateInputType
  }

  export type Carro_produtosGroupByOutputType = {
    carro_id: bigint
    produto_id: bigint
    _count: Carro_produtosCountAggregateOutputType | null
    _avg: Carro_produtosAvgAggregateOutputType | null
    _sum: Carro_produtosSumAggregateOutputType | null
    _min: Carro_produtosMinAggregateOutputType | null
    _max: Carro_produtosMaxAggregateOutputType | null
  }

  type GetCarro_produtosGroupByPayload<T extends carro_produtosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Carro_produtosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Carro_produtosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Carro_produtosGroupByOutputType[P]>
            : GetScalarType<T[P], Carro_produtosGroupByOutputType[P]>
        }
      >
    >


  export type carro_produtosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carro_id?: boolean
    produto_id?: boolean
    carro?: boolean | carrosDefaultArgs<ExtArgs>
    produto?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carro_produtos"]>

  export type carro_produtosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carro_id?: boolean
    produto_id?: boolean
    carro?: boolean | carrosDefaultArgs<ExtArgs>
    produto?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carro_produtos"]>

  export type carro_produtosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carro_id?: boolean
    produto_id?: boolean
    carro?: boolean | carrosDefaultArgs<ExtArgs>
    produto?: boolean | produtosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carro_produtos"]>

  export type carro_produtosSelectScalar = {
    carro_id?: boolean
    produto_id?: boolean
  }

  export type carro_produtosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"carro_id" | "produto_id", ExtArgs["result"]["carro_produtos"]>
  export type carro_produtosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | carrosDefaultArgs<ExtArgs>
    produto?: boolean | produtosDefaultArgs<ExtArgs>
  }
  export type carro_produtosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | carrosDefaultArgs<ExtArgs>
    produto?: boolean | produtosDefaultArgs<ExtArgs>
  }
  export type carro_produtosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carro?: boolean | carrosDefaultArgs<ExtArgs>
    produto?: boolean | produtosDefaultArgs<ExtArgs>
  }

  export type $carro_produtosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carro_produtos"
    objects: {
      carro: Prisma.$carrosPayload<ExtArgs>
      produto: Prisma.$produtosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      carro_id: bigint
      produto_id: bigint
    }, ExtArgs["result"]["carro_produtos"]>
    composites: {}
  }

  type carro_produtosGetPayload<S extends boolean | null | undefined | carro_produtosDefaultArgs> = $Result.GetResult<Prisma.$carro_produtosPayload, S>

  type carro_produtosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carro_produtosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Carro_produtosCountAggregateInputType | true
    }

  export interface carro_produtosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carro_produtos'], meta: { name: 'carro_produtos' } }
    /**
     * Find zero or one Carro_produtos that matches the filter.
     * @param {carro_produtosFindUniqueArgs} args - Arguments to find a Carro_produtos
     * @example
     * // Get one Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carro_produtosFindUniqueArgs>(args: SelectSubset<T, carro_produtosFindUniqueArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carro_produtos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carro_produtosFindUniqueOrThrowArgs} args - Arguments to find a Carro_produtos
     * @example
     * // Get one Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carro_produtosFindUniqueOrThrowArgs>(args: SelectSubset<T, carro_produtosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carro_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carro_produtosFindFirstArgs} args - Arguments to find a Carro_produtos
     * @example
     * // Get one Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carro_produtosFindFirstArgs>(args?: SelectSubset<T, carro_produtosFindFirstArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carro_produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carro_produtosFindFirstOrThrowArgs} args - Arguments to find a Carro_produtos
     * @example
     * // Get one Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carro_produtosFindFirstOrThrowArgs>(args?: SelectSubset<T, carro_produtosFindFirstOrThrowArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carro_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carro_produtosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.findMany()
     * 
     * // Get first 10 Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.findMany({ take: 10 })
     * 
     * // Only select the `carro_id`
     * const carro_produtosWithCarro_idOnly = await prisma.carro_produtos.findMany({ select: { carro_id: true } })
     * 
     */
    findMany<T extends carro_produtosFindManyArgs>(args?: SelectSubset<T, carro_produtosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carro_produtos.
     * @param {carro_produtosCreateArgs} args - Arguments to create a Carro_produtos.
     * @example
     * // Create one Carro_produtos
     * const Carro_produtos = await prisma.carro_produtos.create({
     *   data: {
     *     // ... data to create a Carro_produtos
     *   }
     * })
     * 
     */
    create<T extends carro_produtosCreateArgs>(args: SelectSubset<T, carro_produtosCreateArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carro_produtos.
     * @param {carro_produtosCreateManyArgs} args - Arguments to create many Carro_produtos.
     * @example
     * // Create many Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carro_produtosCreateManyArgs>(args?: SelectSubset<T, carro_produtosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carro_produtos and returns the data saved in the database.
     * @param {carro_produtosCreateManyAndReturnArgs} args - Arguments to create many Carro_produtos.
     * @example
     * // Create many Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carro_produtos and only return the `carro_id`
     * const carro_produtosWithCarro_idOnly = await prisma.carro_produtos.createManyAndReturn({
     *   select: { carro_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carro_produtosCreateManyAndReturnArgs>(args?: SelectSubset<T, carro_produtosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carro_produtos.
     * @param {carro_produtosDeleteArgs} args - Arguments to delete one Carro_produtos.
     * @example
     * // Delete one Carro_produtos
     * const Carro_produtos = await prisma.carro_produtos.delete({
     *   where: {
     *     // ... filter to delete one Carro_produtos
     *   }
     * })
     * 
     */
    delete<T extends carro_produtosDeleteArgs>(args: SelectSubset<T, carro_produtosDeleteArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carro_produtos.
     * @param {carro_produtosUpdateArgs} args - Arguments to update one Carro_produtos.
     * @example
     * // Update one Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carro_produtosUpdateArgs>(args: SelectSubset<T, carro_produtosUpdateArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carro_produtos.
     * @param {carro_produtosDeleteManyArgs} args - Arguments to filter Carro_produtos to delete.
     * @example
     * // Delete a few Carro_produtos
     * const { count } = await prisma.carro_produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carro_produtosDeleteManyArgs>(args?: SelectSubset<T, carro_produtosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carro_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carro_produtosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carro_produtosUpdateManyArgs>(args: SelectSubset<T, carro_produtosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carro_produtos and returns the data updated in the database.
     * @param {carro_produtosUpdateManyAndReturnArgs} args - Arguments to update many Carro_produtos.
     * @example
     * // Update many Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carro_produtos and only return the `carro_id`
     * const carro_produtosWithCarro_idOnly = await prisma.carro_produtos.updateManyAndReturn({
     *   select: { carro_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carro_produtosUpdateManyAndReturnArgs>(args: SelectSubset<T, carro_produtosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carro_produtos.
     * @param {carro_produtosUpsertArgs} args - Arguments to update or create a Carro_produtos.
     * @example
     * // Update or create a Carro_produtos
     * const carro_produtos = await prisma.carro_produtos.upsert({
     *   create: {
     *     // ... data to create a Carro_produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carro_produtos we want to update
     *   }
     * })
     */
    upsert<T extends carro_produtosUpsertArgs>(args: SelectSubset<T, carro_produtosUpsertArgs<ExtArgs>>): Prisma__carro_produtosClient<$Result.GetResult<Prisma.$carro_produtosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carro_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carro_produtosCountArgs} args - Arguments to filter Carro_produtos to count.
     * @example
     * // Count the number of Carro_produtos
     * const count = await prisma.carro_produtos.count({
     *   where: {
     *     // ... the filter for the Carro_produtos we want to count
     *   }
     * })
    **/
    count<T extends carro_produtosCountArgs>(
      args?: Subset<T, carro_produtosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Carro_produtosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carro_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Carro_produtosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Carro_produtosAggregateArgs>(args: Subset<T, Carro_produtosAggregateArgs>): Prisma.PrismaPromise<GetCarro_produtosAggregateType<T>>

    /**
     * Group by Carro_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carro_produtosGroupByArgs} args - Group by arguments.
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
      T extends carro_produtosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carro_produtosGroupByArgs['orderBy'] }
        : { orderBy?: carro_produtosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, carro_produtosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarro_produtosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carro_produtos model
   */
  readonly fields: carro_produtosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carro_produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carro_produtosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carro<T extends carrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carrosDefaultArgs<ExtArgs>>): Prisma__carrosClient<$Result.GetResult<Prisma.$carrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends produtosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produtosDefaultArgs<ExtArgs>>): Prisma__produtosClient<$Result.GetResult<Prisma.$produtosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the carro_produtos model
   */
  interface carro_produtosFieldRefs {
    readonly carro_id: FieldRef<"carro_produtos", 'BigInt'>
    readonly produto_id: FieldRef<"carro_produtos", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * carro_produtos findUnique
   */
  export type carro_produtosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * Filter, which carro_produtos to fetch.
     */
    where: carro_produtosWhereUniqueInput
  }

  /**
   * carro_produtos findUniqueOrThrow
   */
  export type carro_produtosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * Filter, which carro_produtos to fetch.
     */
    where: carro_produtosWhereUniqueInput
  }

  /**
   * carro_produtos findFirst
   */
  export type carro_produtosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * Filter, which carro_produtos to fetch.
     */
    where?: carro_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carro_produtos to fetch.
     */
    orderBy?: carro_produtosOrderByWithRelationInput | carro_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carro_produtos.
     */
    cursor?: carro_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carro_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carro_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carro_produtos.
     */
    distinct?: Carro_produtosScalarFieldEnum | Carro_produtosScalarFieldEnum[]
  }

  /**
   * carro_produtos findFirstOrThrow
   */
  export type carro_produtosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * Filter, which carro_produtos to fetch.
     */
    where?: carro_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carro_produtos to fetch.
     */
    orderBy?: carro_produtosOrderByWithRelationInput | carro_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carro_produtos.
     */
    cursor?: carro_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carro_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carro_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carro_produtos.
     */
    distinct?: Carro_produtosScalarFieldEnum | Carro_produtosScalarFieldEnum[]
  }

  /**
   * carro_produtos findMany
   */
  export type carro_produtosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * Filter, which carro_produtos to fetch.
     */
    where?: carro_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carro_produtos to fetch.
     */
    orderBy?: carro_produtosOrderByWithRelationInput | carro_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carro_produtos.
     */
    cursor?: carro_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carro_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carro_produtos.
     */
    skip?: number
    distinct?: Carro_produtosScalarFieldEnum | Carro_produtosScalarFieldEnum[]
  }

  /**
   * carro_produtos create
   */
  export type carro_produtosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * The data needed to create a carro_produtos.
     */
    data: XOR<carro_produtosCreateInput, carro_produtosUncheckedCreateInput>
  }

  /**
   * carro_produtos createMany
   */
  export type carro_produtosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carro_produtos.
     */
    data: carro_produtosCreateManyInput | carro_produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carro_produtos createManyAndReturn
   */
  export type carro_produtosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * The data used to create many carro_produtos.
     */
    data: carro_produtosCreateManyInput | carro_produtosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carro_produtos update
   */
  export type carro_produtosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * The data needed to update a carro_produtos.
     */
    data: XOR<carro_produtosUpdateInput, carro_produtosUncheckedUpdateInput>
    /**
     * Choose, which carro_produtos to update.
     */
    where: carro_produtosWhereUniqueInput
  }

  /**
   * carro_produtos updateMany
   */
  export type carro_produtosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carro_produtos.
     */
    data: XOR<carro_produtosUpdateManyMutationInput, carro_produtosUncheckedUpdateManyInput>
    /**
     * Filter which carro_produtos to update
     */
    where?: carro_produtosWhereInput
    /**
     * Limit how many carro_produtos to update.
     */
    limit?: number
  }

  /**
   * carro_produtos updateManyAndReturn
   */
  export type carro_produtosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * The data used to update carro_produtos.
     */
    data: XOR<carro_produtosUpdateManyMutationInput, carro_produtosUncheckedUpdateManyInput>
    /**
     * Filter which carro_produtos to update
     */
    where?: carro_produtosWhereInput
    /**
     * Limit how many carro_produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carro_produtos upsert
   */
  export type carro_produtosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * The filter to search for the carro_produtos to update in case it exists.
     */
    where: carro_produtosWhereUniqueInput
    /**
     * In case the carro_produtos found by the `where` argument doesn't exist, create a new carro_produtos with this data.
     */
    create: XOR<carro_produtosCreateInput, carro_produtosUncheckedCreateInput>
    /**
     * In case the carro_produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carro_produtosUpdateInput, carro_produtosUncheckedUpdateInput>
  }

  /**
   * carro_produtos delete
   */
  export type carro_produtosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
    /**
     * Filter which carro_produtos to delete.
     */
    where: carro_produtosWhereUniqueInput
  }

  /**
   * carro_produtos deleteMany
   */
  export type carro_produtosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carro_produtos to delete
     */
    where?: carro_produtosWhereInput
    /**
     * Limit how many carro_produtos to delete.
     */
    limit?: number
  }

  /**
   * carro_produtos without action
   */
  export type carro_produtosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carro_produtos
     */
    select?: carro_produtosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carro_produtos
     */
    omit?: carro_produtosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carro_produtosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarrosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ano_de: 'ano_de',
    ano_ate: 'ano_ate',
    versao: 'versao',
    montadora_id: 'montadora_id',
    foto_url: 'foto_url',
    imagem: 'imagem'
  };

  export type CarrosScalarFieldEnum = (typeof CarrosScalarFieldEnum)[keyof typeof CarrosScalarFieldEnum]


  export const CategoriasScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ContatosScalarFieldEnum: {
    id: 'id',
    departamento: 'departamento',
    colaborador: 'colaborador',
    telefone: 'telefone',
    ramal: 'ramal',
    email: 'email'
  };

  export type ContatosScalarFieldEnum = (typeof ContatosScalarFieldEnum)[keyof typeof ContatosScalarFieldEnum]


  export const DuvidasScalarFieldEnum: {
    id: 'id',
    pergunta: 'pergunta',
    resposta: 'resposta',
    posicao: 'posicao',
    ordem: 'ordem'
  };

  export type DuvidasScalarFieldEnum = (typeof DuvidasScalarFieldEnum)[keyof typeof DuvidasScalarFieldEnum]


  export const ManuaisScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    conteudo: 'conteudo',
    ordem: 'ordem',
    categoria_id: 'categoria_id',
    descricao: 'descricao'
  };

  export type ManuaisScalarFieldEnum = (typeof ManuaisScalarFieldEnum)[keyof typeof ManuaisScalarFieldEnum]


  export const MontadorasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    logo_url: 'logo_url'
  };

  export type MontadorasScalarFieldEnum = (typeof MontadorasScalarFieldEnum)[keyof typeof MontadorasScalarFieldEnum]


  export const Produto_fotosScalarFieldEnum: {
    id: 'id',
    produto_id: 'produto_id',
    foto_url: 'foto_url'
  };

  export type Produto_fotosScalarFieldEnum = (typeof Produto_fotosScalarFieldEnum)[keyof typeof Produto_fotosScalarFieldEnum]


  export const ProdutosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    codigo: 'codigo',
    foto_url: 'foto_url',
    video_url: 'video_url'
  };

  export type ProdutosScalarFieldEnum = (typeof ProdutosScalarFieldEnum)[keyof typeof ProdutosScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    username: 'username',
    senha: 'senha',
    nome: 'nome',
    email: 'email',
    permissao: 'permissao',
    cpf: 'cpf',
    telefone: 'telefone',
    trocar_senha: 'trocar_senha'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const VideosScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    url: 'url'
  };

  export type VideosScalarFieldEnum = (typeof VideosScalarFieldEnum)[keyof typeof VideosScalarFieldEnum]


  export const Videos_assistidosScalarFieldEnum: {
    id: 'id',
    usuario_id: 'usuario_id',
    video_id: 'video_id',
    data_assistido: 'data_assistido'
  };

  export type Videos_assistidosScalarFieldEnum = (typeof Videos_assistidosScalarFieldEnum)[keyof typeof Videos_assistidosScalarFieldEnum]


  export const Videos_instaladorScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    url: 'url'
  };

  export type Videos_instaladorScalarFieldEnum = (typeof Videos_instaladorScalarFieldEnum)[keyof typeof Videos_instaladorScalarFieldEnum]


  export const Carro_produtosScalarFieldEnum: {
    carro_id: 'carro_id',
    produto_id: 'produto_id'
  };

  export type Carro_produtosScalarFieldEnum = (typeof Carro_produtosScalarFieldEnum)[keyof typeof Carro_produtosScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type carrosWhereInput = {
    AND?: carrosWhereInput | carrosWhereInput[]
    OR?: carrosWhereInput[]
    NOT?: carrosWhereInput | carrosWhereInput[]
    id?: BigIntFilter<"carros"> | bigint | number
    nome?: StringNullableFilter<"carros"> | string | null
    ano_de?: BigIntNullableFilter<"carros"> | bigint | number | null
    ano_ate?: BigIntNullableFilter<"carros"> | bigint | number | null
    versao?: StringNullableFilter<"carros"> | string | null
    montadora_id?: BigIntNullableFilter<"carros"> | bigint | number | null
    foto_url?: StringNullableFilter<"carros"> | string | null
    imagem?: StringNullableFilter<"carros"> | string | null
    montadora?: XOR<MontadorasNullableScalarRelationFilter, montadorasWhereInput> | null
    produtos?: Carro_produtosListRelationFilter
  }

  export type carrosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    ano_de?: SortOrderInput | SortOrder
    ano_ate?: SortOrderInput | SortOrder
    versao?: SortOrderInput | SortOrder
    montadora_id?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    montadora?: montadorasOrderByWithRelationInput
    produtos?: carro_produtosOrderByRelationAggregateInput
  }

  export type carrosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: carrosWhereInput | carrosWhereInput[]
    OR?: carrosWhereInput[]
    NOT?: carrosWhereInput | carrosWhereInput[]
    nome?: StringNullableFilter<"carros"> | string | null
    ano_de?: BigIntNullableFilter<"carros"> | bigint | number | null
    ano_ate?: BigIntNullableFilter<"carros"> | bigint | number | null
    versao?: StringNullableFilter<"carros"> | string | null
    montadora_id?: BigIntNullableFilter<"carros"> | bigint | number | null
    foto_url?: StringNullableFilter<"carros"> | string | null
    imagem?: StringNullableFilter<"carros"> | string | null
    montadora?: XOR<MontadorasNullableScalarRelationFilter, montadorasWhereInput> | null
    produtos?: Carro_produtosListRelationFilter
  }, "id" | "id">

  export type carrosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    ano_de?: SortOrderInput | SortOrder
    ano_ate?: SortOrderInput | SortOrder
    versao?: SortOrderInput | SortOrder
    montadora_id?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    imagem?: SortOrderInput | SortOrder
    _count?: carrosCountOrderByAggregateInput
    _avg?: carrosAvgOrderByAggregateInput
    _max?: carrosMaxOrderByAggregateInput
    _min?: carrosMinOrderByAggregateInput
    _sum?: carrosSumOrderByAggregateInput
  }

  export type carrosScalarWhereWithAggregatesInput = {
    AND?: carrosScalarWhereWithAggregatesInput | carrosScalarWhereWithAggregatesInput[]
    OR?: carrosScalarWhereWithAggregatesInput[]
    NOT?: carrosScalarWhereWithAggregatesInput | carrosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"carros"> | bigint | number
    nome?: StringNullableWithAggregatesFilter<"carros"> | string | null
    ano_de?: BigIntNullableWithAggregatesFilter<"carros"> | bigint | number | null
    ano_ate?: BigIntNullableWithAggregatesFilter<"carros"> | bigint | number | null
    versao?: StringNullableWithAggregatesFilter<"carros"> | string | null
    montadora_id?: BigIntNullableWithAggregatesFilter<"carros"> | bigint | number | null
    foto_url?: StringNullableWithAggregatesFilter<"carros"> | string | null
    imagem?: StringNullableWithAggregatesFilter<"carros"> | string | null
  }

  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id?: BigIntFilter<"categorias"> | bigint | number
    nome?: StringNullableFilter<"categorias"> | string | null
  }

  export type categoriasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    nome?: StringNullableFilter<"categorias"> | string | null
  }, "id" | "id">

  export type categoriasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"categorias"> | bigint | number
    nome?: StringNullableWithAggregatesFilter<"categorias"> | string | null
  }

  export type contatosWhereInput = {
    AND?: contatosWhereInput | contatosWhereInput[]
    OR?: contatosWhereInput[]
    NOT?: contatosWhereInput | contatosWhereInput[]
    id?: BigIntFilter<"contatos"> | bigint | number
    departamento?: StringNullableFilter<"contatos"> | string | null
    colaborador?: StringNullableFilter<"contatos"> | string | null
    telefone?: StringNullableFilter<"contatos"> | string | null
    ramal?: StringNullableFilter<"contatos"> | string | null
    email?: StringNullableFilter<"contatos"> | string | null
  }

  export type contatosOrderByWithRelationInput = {
    id?: SortOrder
    departamento?: SortOrderInput | SortOrder
    colaborador?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    ramal?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
  }

  export type contatosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: contatosWhereInput | contatosWhereInput[]
    OR?: contatosWhereInput[]
    NOT?: contatosWhereInput | contatosWhereInput[]
    departamento?: StringNullableFilter<"contatos"> | string | null
    colaborador?: StringNullableFilter<"contatos"> | string | null
    telefone?: StringNullableFilter<"contatos"> | string | null
    ramal?: StringNullableFilter<"contatos"> | string | null
    email?: StringNullableFilter<"contatos"> | string | null
  }, "id" | "id">

  export type contatosOrderByWithAggregationInput = {
    id?: SortOrder
    departamento?: SortOrderInput | SortOrder
    colaborador?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    ramal?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: contatosCountOrderByAggregateInput
    _avg?: contatosAvgOrderByAggregateInput
    _max?: contatosMaxOrderByAggregateInput
    _min?: contatosMinOrderByAggregateInput
    _sum?: contatosSumOrderByAggregateInput
  }

  export type contatosScalarWhereWithAggregatesInput = {
    AND?: contatosScalarWhereWithAggregatesInput | contatosScalarWhereWithAggregatesInput[]
    OR?: contatosScalarWhereWithAggregatesInput[]
    NOT?: contatosScalarWhereWithAggregatesInput | contatosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"contatos"> | bigint | number
    departamento?: StringNullableWithAggregatesFilter<"contatos"> | string | null
    colaborador?: StringNullableWithAggregatesFilter<"contatos"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"contatos"> | string | null
    ramal?: StringNullableWithAggregatesFilter<"contatos"> | string | null
    email?: StringNullableWithAggregatesFilter<"contatos"> | string | null
  }

  export type duvidasWhereInput = {
    AND?: duvidasWhereInput | duvidasWhereInput[]
    OR?: duvidasWhereInput[]
    NOT?: duvidasWhereInput | duvidasWhereInput[]
    id?: BigIntFilter<"duvidas"> | bigint | number
    pergunta?: StringNullableFilter<"duvidas"> | string | null
    resposta?: StringNullableFilter<"duvidas"> | string | null
    posicao?: BigIntNullableFilter<"duvidas"> | bigint | number | null
    ordem?: BigIntNullableFilter<"duvidas"> | bigint | number | null
  }

  export type duvidasOrderByWithRelationInput = {
    id?: SortOrder
    pergunta?: SortOrderInput | SortOrder
    resposta?: SortOrderInput | SortOrder
    posicao?: SortOrderInput | SortOrder
    ordem?: SortOrderInput | SortOrder
  }

  export type duvidasWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: duvidasWhereInput | duvidasWhereInput[]
    OR?: duvidasWhereInput[]
    NOT?: duvidasWhereInput | duvidasWhereInput[]
    pergunta?: StringNullableFilter<"duvidas"> | string | null
    resposta?: StringNullableFilter<"duvidas"> | string | null
    posicao?: BigIntNullableFilter<"duvidas"> | bigint | number | null
    ordem?: BigIntNullableFilter<"duvidas"> | bigint | number | null
  }, "id" | "id">

  export type duvidasOrderByWithAggregationInput = {
    id?: SortOrder
    pergunta?: SortOrderInput | SortOrder
    resposta?: SortOrderInput | SortOrder
    posicao?: SortOrderInput | SortOrder
    ordem?: SortOrderInput | SortOrder
    _count?: duvidasCountOrderByAggregateInput
    _avg?: duvidasAvgOrderByAggregateInput
    _max?: duvidasMaxOrderByAggregateInput
    _min?: duvidasMinOrderByAggregateInput
    _sum?: duvidasSumOrderByAggregateInput
  }

  export type duvidasScalarWhereWithAggregatesInput = {
    AND?: duvidasScalarWhereWithAggregatesInput | duvidasScalarWhereWithAggregatesInput[]
    OR?: duvidasScalarWhereWithAggregatesInput[]
    NOT?: duvidasScalarWhereWithAggregatesInput | duvidasScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"duvidas"> | bigint | number
    pergunta?: StringNullableWithAggregatesFilter<"duvidas"> | string | null
    resposta?: StringNullableWithAggregatesFilter<"duvidas"> | string | null
    posicao?: BigIntNullableWithAggregatesFilter<"duvidas"> | bigint | number | null
    ordem?: BigIntNullableWithAggregatesFilter<"duvidas"> | bigint | number | null
  }

  export type manuaisWhereInput = {
    AND?: manuaisWhereInput | manuaisWhereInput[]
    OR?: manuaisWhereInput[]
    NOT?: manuaisWhereInput | manuaisWhereInput[]
    id?: BigIntFilter<"manuais"> | bigint | number
    titulo?: StringNullableFilter<"manuais"> | string | null
    conteudo?: StringNullableFilter<"manuais"> | string | null
    ordem?: BigIntNullableFilter<"manuais"> | bigint | number | null
    categoria_id?: BigIntNullableFilter<"manuais"> | bigint | number | null
    descricao?: StringNullableFilter<"manuais"> | string | null
  }

  export type manuaisOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    conteudo?: SortOrderInput | SortOrder
    ordem?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
  }

  export type manuaisWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: manuaisWhereInput | manuaisWhereInput[]
    OR?: manuaisWhereInput[]
    NOT?: manuaisWhereInput | manuaisWhereInput[]
    titulo?: StringNullableFilter<"manuais"> | string | null
    conteudo?: StringNullableFilter<"manuais"> | string | null
    ordem?: BigIntNullableFilter<"manuais"> | bigint | number | null
    categoria_id?: BigIntNullableFilter<"manuais"> | bigint | number | null
    descricao?: StringNullableFilter<"manuais"> | string | null
  }, "id" | "id">

  export type manuaisOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    conteudo?: SortOrderInput | SortOrder
    ordem?: SortOrderInput | SortOrder
    categoria_id?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: manuaisCountOrderByAggregateInput
    _avg?: manuaisAvgOrderByAggregateInput
    _max?: manuaisMaxOrderByAggregateInput
    _min?: manuaisMinOrderByAggregateInput
    _sum?: manuaisSumOrderByAggregateInput
  }

  export type manuaisScalarWhereWithAggregatesInput = {
    AND?: manuaisScalarWhereWithAggregatesInput | manuaisScalarWhereWithAggregatesInput[]
    OR?: manuaisScalarWhereWithAggregatesInput[]
    NOT?: manuaisScalarWhereWithAggregatesInput | manuaisScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"manuais"> | bigint | number
    titulo?: StringNullableWithAggregatesFilter<"manuais"> | string | null
    conteudo?: StringNullableWithAggregatesFilter<"manuais"> | string | null
    ordem?: BigIntNullableWithAggregatesFilter<"manuais"> | bigint | number | null
    categoria_id?: BigIntNullableWithAggregatesFilter<"manuais"> | bigint | number | null
    descricao?: StringNullableWithAggregatesFilter<"manuais"> | string | null
  }

  export type montadorasWhereInput = {
    AND?: montadorasWhereInput | montadorasWhereInput[]
    OR?: montadorasWhereInput[]
    NOT?: montadorasWhereInput | montadorasWhereInput[]
    id?: BigIntFilter<"montadoras"> | bigint | number
    nome?: StringNullableFilter<"montadoras"> | string | null
    logo_url?: StringNullableFilter<"montadoras"> | string | null
    carros?: CarrosListRelationFilter
  }

  export type montadorasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    carros?: carrosOrderByRelationAggregateInput
  }

  export type montadorasWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: montadorasWhereInput | montadorasWhereInput[]
    OR?: montadorasWhereInput[]
    NOT?: montadorasWhereInput | montadorasWhereInput[]
    nome?: StringNullableFilter<"montadoras"> | string | null
    logo_url?: StringNullableFilter<"montadoras"> | string | null
    carros?: CarrosListRelationFilter
  }, "id" | "id">

  export type montadorasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    logo_url?: SortOrderInput | SortOrder
    _count?: montadorasCountOrderByAggregateInput
    _avg?: montadorasAvgOrderByAggregateInput
    _max?: montadorasMaxOrderByAggregateInput
    _min?: montadorasMinOrderByAggregateInput
    _sum?: montadorasSumOrderByAggregateInput
  }

  export type montadorasScalarWhereWithAggregatesInput = {
    AND?: montadorasScalarWhereWithAggregatesInput | montadorasScalarWhereWithAggregatesInput[]
    OR?: montadorasScalarWhereWithAggregatesInput[]
    NOT?: montadorasScalarWhereWithAggregatesInput | montadorasScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"montadoras"> | bigint | number
    nome?: StringNullableWithAggregatesFilter<"montadoras"> | string | null
    logo_url?: StringNullableWithAggregatesFilter<"montadoras"> | string | null
  }

  export type produto_fotosWhereInput = {
    AND?: produto_fotosWhereInput | produto_fotosWhereInput[]
    OR?: produto_fotosWhereInput[]
    NOT?: produto_fotosWhereInput | produto_fotosWhereInput[]
    id?: BigIntFilter<"produto_fotos"> | bigint | number
    produto_id?: BigIntNullableFilter<"produto_fotos"> | bigint | number | null
    foto_url?: StringNullableFilter<"produto_fotos"> | string | null
  }

  export type produto_fotosOrderByWithRelationInput = {
    id?: SortOrder
    produto_id?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
  }

  export type produto_fotosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: produto_fotosWhereInput | produto_fotosWhereInput[]
    OR?: produto_fotosWhereInput[]
    NOT?: produto_fotosWhereInput | produto_fotosWhereInput[]
    produto_id?: BigIntNullableFilter<"produto_fotos"> | bigint | number | null
    foto_url?: StringNullableFilter<"produto_fotos"> | string | null
  }, "id" | "id">

  export type produto_fotosOrderByWithAggregationInput = {
    id?: SortOrder
    produto_id?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    _count?: produto_fotosCountOrderByAggregateInput
    _avg?: produto_fotosAvgOrderByAggregateInput
    _max?: produto_fotosMaxOrderByAggregateInput
    _min?: produto_fotosMinOrderByAggregateInput
    _sum?: produto_fotosSumOrderByAggregateInput
  }

  export type produto_fotosScalarWhereWithAggregatesInput = {
    AND?: produto_fotosScalarWhereWithAggregatesInput | produto_fotosScalarWhereWithAggregatesInput[]
    OR?: produto_fotosScalarWhereWithAggregatesInput[]
    NOT?: produto_fotosScalarWhereWithAggregatesInput | produto_fotosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"produto_fotos"> | bigint | number
    produto_id?: BigIntNullableWithAggregatesFilter<"produto_fotos"> | bigint | number | null
    foto_url?: StringNullableWithAggregatesFilter<"produto_fotos"> | string | null
  }

  export type produtosWhereInput = {
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    id?: BigIntFilter<"produtos"> | bigint | number
    nome?: StringNullableFilter<"produtos"> | string | null
    codigo?: StringNullableFilter<"produtos"> | string | null
    foto_url?: StringNullableFilter<"produtos"> | string | null
    video_url?: StringNullableFilter<"produtos"> | string | null
    carros?: Carro_produtosListRelationFilter
  }

  export type produtosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    carros?: carro_produtosOrderByRelationAggregateInput
  }

  export type produtosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: produtosWhereInput | produtosWhereInput[]
    OR?: produtosWhereInput[]
    NOT?: produtosWhereInput | produtosWhereInput[]
    nome?: StringNullableFilter<"produtos"> | string | null
    codigo?: StringNullableFilter<"produtos"> | string | null
    foto_url?: StringNullableFilter<"produtos"> | string | null
    video_url?: StringNullableFilter<"produtos"> | string | null
    carros?: Carro_produtosListRelationFilter
  }, "id" | "id">

  export type produtosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    codigo?: SortOrderInput | SortOrder
    foto_url?: SortOrderInput | SortOrder
    video_url?: SortOrderInput | SortOrder
    _count?: produtosCountOrderByAggregateInput
    _avg?: produtosAvgOrderByAggregateInput
    _max?: produtosMaxOrderByAggregateInput
    _min?: produtosMinOrderByAggregateInput
    _sum?: produtosSumOrderByAggregateInput
  }

  export type produtosScalarWhereWithAggregatesInput = {
    AND?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    OR?: produtosScalarWhereWithAggregatesInput[]
    NOT?: produtosScalarWhereWithAggregatesInput | produtosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"produtos"> | bigint | number
    nome?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    codigo?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    foto_url?: StringNullableWithAggregatesFilter<"produtos"> | string | null
    video_url?: StringNullableWithAggregatesFilter<"produtos"> | string | null
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: BigIntFilter<"usuarios"> | bigint | number
    username?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringNullableFilter<"usuarios"> | string | null
    nome?: StringNullableFilter<"usuarios"> | string | null
    email?: StringNullableFilter<"usuarios"> | string | null
    permissao?: StringNullableFilter<"usuarios"> | string | null
    cpf?: StringNullableFilter<"usuarios"> | string | null
    telefone?: StringNullableFilter<"usuarios"> | string | null
    trocar_senha?: BigIntNullableFilter<"usuarios"> | bigint | number | null
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    permissao?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    trocar_senha?: SortOrderInput | SortOrder
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    username?: StringNullableFilter<"usuarios"> | string | null
    senha?: StringNullableFilter<"usuarios"> | string | null
    nome?: StringNullableFilter<"usuarios"> | string | null
    permissao?: StringNullableFilter<"usuarios"> | string | null
    cpf?: StringNullableFilter<"usuarios"> | string | null
    telefone?: StringNullableFilter<"usuarios"> | string | null
    trocar_senha?: BigIntNullableFilter<"usuarios"> | bigint | number | null
  }, "id" | "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    senha?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    permissao?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    trocar_senha?: SortOrderInput | SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"usuarios"> | bigint | number
    username?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    senha?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    nome?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    email?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    permissao?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    trocar_senha?: BigIntNullableWithAggregatesFilter<"usuarios"> | bigint | number | null
  }

  export type videosWhereInput = {
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    id?: BigIntFilter<"videos"> | bigint | number
    titulo?: StringNullableFilter<"videos"> | string | null
    descricao?: StringNullableFilter<"videos"> | string | null
    url?: StringNullableFilter<"videos"> | string | null
  }

  export type videosOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
  }

  export type videosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    titulo?: StringNullableFilter<"videos"> | string | null
    descricao?: StringNullableFilter<"videos"> | string | null
    url?: StringNullableFilter<"videos"> | string | null
  }, "id" | "id">

  export type videosOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    _count?: videosCountOrderByAggregateInput
    _avg?: videosAvgOrderByAggregateInput
    _max?: videosMaxOrderByAggregateInput
    _min?: videosMinOrderByAggregateInput
    _sum?: videosSumOrderByAggregateInput
  }

  export type videosScalarWhereWithAggregatesInput = {
    AND?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    OR?: videosScalarWhereWithAggregatesInput[]
    NOT?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"videos"> | bigint | number
    titulo?: StringNullableWithAggregatesFilter<"videos"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"videos"> | string | null
    url?: StringNullableWithAggregatesFilter<"videos"> | string | null
  }

  export type videos_assistidosWhereInput = {
    AND?: videos_assistidosWhereInput | videos_assistidosWhereInput[]
    OR?: videos_assistidosWhereInput[]
    NOT?: videos_assistidosWhereInput | videos_assistidosWhereInput[]
    id?: BigIntFilter<"videos_assistidos"> | bigint | number
    usuario_id?: BigIntNullableFilter<"videos_assistidos"> | bigint | number | null
    video_id?: BigIntNullableFilter<"videos_assistidos"> | bigint | number | null
    data_assistido?: DateTimeNullableFilter<"videos_assistidos"> | Date | string | null
  }

  export type videos_assistidosOrderByWithRelationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    video_id?: SortOrderInput | SortOrder
    data_assistido?: SortOrderInput | SortOrder
  }

  export type videos_assistidosWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: videos_assistidosWhereInput | videos_assistidosWhereInput[]
    OR?: videos_assistidosWhereInput[]
    NOT?: videos_assistidosWhereInput | videos_assistidosWhereInput[]
    usuario_id?: BigIntNullableFilter<"videos_assistidos"> | bigint | number | null
    video_id?: BigIntNullableFilter<"videos_assistidos"> | bigint | number | null
    data_assistido?: DateTimeNullableFilter<"videos_assistidos"> | Date | string | null
  }, "id" | "id">

  export type videos_assistidosOrderByWithAggregationInput = {
    id?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    video_id?: SortOrderInput | SortOrder
    data_assistido?: SortOrderInput | SortOrder
    _count?: videos_assistidosCountOrderByAggregateInput
    _avg?: videos_assistidosAvgOrderByAggregateInput
    _max?: videos_assistidosMaxOrderByAggregateInput
    _min?: videos_assistidosMinOrderByAggregateInput
    _sum?: videos_assistidosSumOrderByAggregateInput
  }

  export type videos_assistidosScalarWhereWithAggregatesInput = {
    AND?: videos_assistidosScalarWhereWithAggregatesInput | videos_assistidosScalarWhereWithAggregatesInput[]
    OR?: videos_assistidosScalarWhereWithAggregatesInput[]
    NOT?: videos_assistidosScalarWhereWithAggregatesInput | videos_assistidosScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"videos_assistidos"> | bigint | number
    usuario_id?: BigIntNullableWithAggregatesFilter<"videos_assistidos"> | bigint | number | null
    video_id?: BigIntNullableWithAggregatesFilter<"videos_assistidos"> | bigint | number | null
    data_assistido?: DateTimeNullableWithAggregatesFilter<"videos_assistidos"> | Date | string | null
  }

  export type videos_instaladorWhereInput = {
    AND?: videos_instaladorWhereInput | videos_instaladorWhereInput[]
    OR?: videos_instaladorWhereInput[]
    NOT?: videos_instaladorWhereInput | videos_instaladorWhereInput[]
    id?: BigIntFilter<"videos_instalador"> | bigint | number
    titulo?: StringNullableFilter<"videos_instalador"> | string | null
    descricao?: StringNullableFilter<"videos_instalador"> | string | null
    url?: StringNullableFilter<"videos_instalador"> | string | null
  }

  export type videos_instaladorOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
  }

  export type videos_instaladorWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: videos_instaladorWhereInput | videos_instaladorWhereInput[]
    OR?: videos_instaladorWhereInput[]
    NOT?: videos_instaladorWhereInput | videos_instaladorWhereInput[]
    titulo?: StringNullableFilter<"videos_instalador"> | string | null
    descricao?: StringNullableFilter<"videos_instalador"> | string | null
    url?: StringNullableFilter<"videos_instalador"> | string | null
  }, "id" | "id">

  export type videos_instaladorOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    _count?: videos_instaladorCountOrderByAggregateInput
    _avg?: videos_instaladorAvgOrderByAggregateInput
    _max?: videos_instaladorMaxOrderByAggregateInput
    _min?: videos_instaladorMinOrderByAggregateInput
    _sum?: videos_instaladorSumOrderByAggregateInput
  }

  export type videos_instaladorScalarWhereWithAggregatesInput = {
    AND?: videos_instaladorScalarWhereWithAggregatesInput | videos_instaladorScalarWhereWithAggregatesInput[]
    OR?: videos_instaladorScalarWhereWithAggregatesInput[]
    NOT?: videos_instaladorScalarWhereWithAggregatesInput | videos_instaladorScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"videos_instalador"> | bigint | number
    titulo?: StringNullableWithAggregatesFilter<"videos_instalador"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"videos_instalador"> | string | null
    url?: StringNullableWithAggregatesFilter<"videos_instalador"> | string | null
  }

  export type carro_produtosWhereInput = {
    AND?: carro_produtosWhereInput | carro_produtosWhereInput[]
    OR?: carro_produtosWhereInput[]
    NOT?: carro_produtosWhereInput | carro_produtosWhereInput[]
    carro_id?: BigIntFilter<"carro_produtos"> | bigint | number
    produto_id?: BigIntFilter<"carro_produtos"> | bigint | number
    carro?: XOR<CarrosScalarRelationFilter, carrosWhereInput>
    produto?: XOR<ProdutosScalarRelationFilter, produtosWhereInput>
  }

  export type carro_produtosOrderByWithRelationInput = {
    carro_id?: SortOrder
    produto_id?: SortOrder
    carro?: carrosOrderByWithRelationInput
    produto?: produtosOrderByWithRelationInput
  }

  export type carro_produtosWhereUniqueInput = Prisma.AtLeast<{
    carro_id_produto_id?: carro_produtosCarro_idProduto_idCompoundUniqueInput
    AND?: carro_produtosWhereInput | carro_produtosWhereInput[]
    OR?: carro_produtosWhereInput[]
    NOT?: carro_produtosWhereInput | carro_produtosWhereInput[]
    carro_id?: BigIntFilter<"carro_produtos"> | bigint | number
    produto_id?: BigIntFilter<"carro_produtos"> | bigint | number
    carro?: XOR<CarrosScalarRelationFilter, carrosWhereInput>
    produto?: XOR<ProdutosScalarRelationFilter, produtosWhereInput>
  }, "carro_id_produto_id">

  export type carro_produtosOrderByWithAggregationInput = {
    carro_id?: SortOrder
    produto_id?: SortOrder
    _count?: carro_produtosCountOrderByAggregateInput
    _avg?: carro_produtosAvgOrderByAggregateInput
    _max?: carro_produtosMaxOrderByAggregateInput
    _min?: carro_produtosMinOrderByAggregateInput
    _sum?: carro_produtosSumOrderByAggregateInput
  }

  export type carro_produtosScalarWhereWithAggregatesInput = {
    AND?: carro_produtosScalarWhereWithAggregatesInput | carro_produtosScalarWhereWithAggregatesInput[]
    OR?: carro_produtosScalarWhereWithAggregatesInput[]
    NOT?: carro_produtosScalarWhereWithAggregatesInput | carro_produtosScalarWhereWithAggregatesInput[]
    carro_id?: BigIntWithAggregatesFilter<"carro_produtos"> | bigint | number
    produto_id?: BigIntWithAggregatesFilter<"carro_produtos"> | bigint | number
  }

  export type carrosCreateInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    foto_url?: string | null
    imagem?: string | null
    montadora?: montadorasCreateNestedOneWithoutCarrosInput
    produtos?: carro_produtosCreateNestedManyWithoutCarroInput
  }

  export type carrosUncheckedCreateInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    montadora_id?: bigint | number | null
    foto_url?: string | null
    imagem?: string | null
    produtos?: carro_produtosUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carrosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    montadora?: montadorasUpdateOneWithoutCarrosNestedInput
    produtos?: carro_produtosUpdateManyWithoutCarroNestedInput
  }

  export type carrosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    montadora_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: carro_produtosUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type carrosCreateManyInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    montadora_id?: bigint | number | null
    foto_url?: string | null
    imagem?: string | null
  }

  export type carrosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carrosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    montadora_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasCreateInput = {
    id?: bigint | number
    nome?: string | null
  }

  export type categoriasUncheckedCreateInput = {
    id?: bigint | number
    nome?: string | null
  }

  export type categoriasUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasCreateManyInput = {
    id?: bigint | number
    nome?: string | null
  }

  export type categoriasUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriasUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contatosCreateInput = {
    id?: bigint | number
    departamento?: string | null
    colaborador?: string | null
    telefone?: string | null
    ramal?: string | null
    email?: string | null
  }

  export type contatosUncheckedCreateInput = {
    id?: bigint | number
    departamento?: string | null
    colaborador?: string | null
    telefone?: string | null
    ramal?: string | null
    email?: string | null
  }

  export type contatosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ramal?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contatosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ramal?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contatosCreateManyInput = {
    id?: bigint | number
    departamento?: string | null
    colaborador?: string | null
    telefone?: string | null
    ramal?: string | null
    email?: string | null
  }

  export type contatosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ramal?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contatosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    departamento?: NullableStringFieldUpdateOperationsInput | string | null
    colaborador?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    ramal?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type duvidasCreateInput = {
    id?: bigint | number
    pergunta?: string | null
    resposta?: string | null
    posicao?: bigint | number | null
    ordem?: bigint | number | null
  }

  export type duvidasUncheckedCreateInput = {
    id?: bigint | number
    pergunta?: string | null
    resposta?: string | null
    posicao?: bigint | number | null
    ordem?: bigint | number | null
  }

  export type duvidasUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pergunta?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableStringFieldUpdateOperationsInput | string | null
    posicao?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type duvidasUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pergunta?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableStringFieldUpdateOperationsInput | string | null
    posicao?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type duvidasCreateManyInput = {
    id?: bigint | number
    pergunta?: string | null
    resposta?: string | null
    posicao?: bigint | number | null
    ordem?: bigint | number | null
  }

  export type duvidasUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pergunta?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableStringFieldUpdateOperationsInput | string | null
    posicao?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type duvidasUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    pergunta?: NullableStringFieldUpdateOperationsInput | string | null
    resposta?: NullableStringFieldUpdateOperationsInput | string | null
    posicao?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type manuaisCreateInput = {
    id?: bigint | number
    titulo?: string | null
    conteudo?: string | null
    ordem?: bigint | number | null
    categoria_id?: bigint | number | null
    descricao?: string | null
  }

  export type manuaisUncheckedCreateInput = {
    id?: bigint | number
    titulo?: string | null
    conteudo?: string | null
    ordem?: bigint | number | null
    categoria_id?: bigint | number | null
    descricao?: string | null
  }

  export type manuaisUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categoria_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manuaisUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categoria_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manuaisCreateManyInput = {
    id?: bigint | number
    titulo?: string | null
    conteudo?: string | null
    ordem?: bigint | number | null
    categoria_id?: bigint | number | null
    descricao?: string | null
  }

  export type manuaisUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categoria_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type manuaisUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    conteudo?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    categoria_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type montadorasCreateInput = {
    id?: bigint | number
    nome?: string | null
    logo_url?: string | null
    carros?: carrosCreateNestedManyWithoutMontadoraInput
  }

  export type montadorasUncheckedCreateInput = {
    id?: bigint | number
    nome?: string | null
    logo_url?: string | null
    carros?: carrosUncheckedCreateNestedManyWithoutMontadoraInput
  }

  export type montadorasUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    carros?: carrosUpdateManyWithoutMontadoraNestedInput
  }

  export type montadorasUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    carros?: carrosUncheckedUpdateManyWithoutMontadoraNestedInput
  }

  export type montadorasCreateManyInput = {
    id?: bigint | number
    nome?: string | null
    logo_url?: string | null
  }

  export type montadorasUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type montadorasUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_fotosCreateInput = {
    id?: bigint | number
    produto_id?: bigint | number | null
    foto_url?: string | null
  }

  export type produto_fotosUncheckedCreateInput = {
    id?: bigint | number
    produto_id?: bigint | number | null
    foto_url?: string | null
  }

  export type produto_fotosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    produto_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_fotosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    produto_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_fotosCreateManyInput = {
    id?: bigint | number
    produto_id?: bigint | number | null
    foto_url?: string | null
  }

  export type produto_fotosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    produto_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produto_fotosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    produto_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtosCreateInput = {
    id?: bigint | number
    nome?: string | null
    codigo?: string | null
    foto_url?: string | null
    video_url?: string | null
    carros?: carro_produtosCreateNestedManyWithoutProdutoInput
  }

  export type produtosUncheckedCreateInput = {
    id?: bigint | number
    nome?: string | null
    codigo?: string | null
    foto_url?: string | null
    video_url?: string | null
    carros?: carro_produtosUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type produtosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    carros?: carro_produtosUpdateManyWithoutProdutoNestedInput
  }

  export type produtosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    carros?: carro_produtosUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type produtosCreateManyInput = {
    id?: bigint | number
    nome?: string | null
    codigo?: string | null
    foto_url?: string | null
    video_url?: string | null
  }

  export type produtosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usuariosCreateInput = {
    id?: bigint | number
    username?: string | null
    senha?: string | null
    nome?: string | null
    email?: string | null
    permissao?: string | null
    cpf?: string | null
    telefone?: string | null
    trocar_senha?: bigint | number | null
  }

  export type usuariosUncheckedCreateInput = {
    id?: bigint | number
    username?: string | null
    senha?: string | null
    nome?: string | null
    email?: string | null
    permissao?: string | null
    cpf?: string | null
    telefone?: string | null
    trocar_senha?: bigint | number | null
  }

  export type usuariosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    trocar_senha?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type usuariosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    trocar_senha?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type usuariosCreateManyInput = {
    id?: bigint | number
    username?: string | null
    senha?: string | null
    nome?: string | null
    email?: string | null
    permissao?: string | null
    cpf?: string | null
    telefone?: string | null
    trocar_senha?: bigint | number | null
  }

  export type usuariosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    trocar_senha?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    permissao?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    trocar_senha?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type videosCreateInput = {
    id?: bigint | number
    titulo?: string | null
    descricao?: string | null
    url?: string | null
  }

  export type videosUncheckedCreateInput = {
    id?: bigint | number
    titulo?: string | null
    descricao?: string | null
    url?: string | null
  }

  export type videosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videosCreateManyInput = {
    id?: bigint | number
    titulo?: string | null
    descricao?: string | null
    url?: string | null
  }

  export type videosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videos_assistidosCreateInput = {
    id?: bigint | number
    usuario_id?: bigint | number | null
    video_id?: bigint | number | null
    data_assistido?: Date | string | null
  }

  export type videos_assistidosUncheckedCreateInput = {
    id?: bigint | number
    usuario_id?: bigint | number | null
    video_id?: bigint | number | null
    data_assistido?: Date | string | null
  }

  export type videos_assistidosUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    video_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    data_assistido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videos_assistidosUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    video_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    data_assistido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videos_assistidosCreateManyInput = {
    id?: bigint | number
    usuario_id?: bigint | number | null
    video_id?: bigint | number | null
    data_assistido?: Date | string | null
  }

  export type videos_assistidosUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    video_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    data_assistido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videos_assistidosUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    usuario_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    video_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    data_assistido?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type videos_instaladorCreateInput = {
    id?: bigint | number
    titulo?: string | null
    descricao?: string | null
    url?: string | null
  }

  export type videos_instaladorUncheckedCreateInput = {
    id?: bigint | number
    titulo?: string | null
    descricao?: string | null
    url?: string | null
  }

  export type videos_instaladorUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videos_instaladorUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videos_instaladorCreateManyInput = {
    id?: bigint | number
    titulo?: string | null
    descricao?: string | null
    url?: string | null
  }

  export type videos_instaladorUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type videos_instaladorUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carro_produtosCreateInput = {
    carro: carrosCreateNestedOneWithoutProdutosInput
    produto: produtosCreateNestedOneWithoutCarrosInput
  }

  export type carro_produtosUncheckedCreateInput = {
    carro_id: bigint | number
    produto_id: bigint | number
  }

  export type carro_produtosUpdateInput = {
    carro?: carrosUpdateOneRequiredWithoutProdutosNestedInput
    produto?: produtosUpdateOneRequiredWithoutCarrosNestedInput
  }

  export type carro_produtosUncheckedUpdateInput = {
    carro_id?: BigIntFieldUpdateOperationsInput | bigint | number
    produto_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type carro_produtosCreateManyInput = {
    carro_id: bigint | number
    produto_id: bigint | number
  }

  export type carro_produtosUpdateManyMutationInput = {

  }

  export type carro_produtosUncheckedUpdateManyInput = {
    carro_id?: BigIntFieldUpdateOperationsInput | bigint | number
    produto_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type MontadorasNullableScalarRelationFilter = {
    is?: montadorasWhereInput | null
    isNot?: montadorasWhereInput | null
  }

  export type Carro_produtosListRelationFilter = {
    every?: carro_produtosWhereInput
    some?: carro_produtosWhereInput
    none?: carro_produtosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type carro_produtosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type carrosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ano_de?: SortOrder
    ano_ate?: SortOrder
    versao?: SortOrder
    montadora_id?: SortOrder
    foto_url?: SortOrder
    imagem?: SortOrder
  }

  export type carrosAvgOrderByAggregateInput = {
    id?: SortOrder
    ano_de?: SortOrder
    ano_ate?: SortOrder
    montadora_id?: SortOrder
  }

  export type carrosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ano_de?: SortOrder
    ano_ate?: SortOrder
    versao?: SortOrder
    montadora_id?: SortOrder
    foto_url?: SortOrder
    imagem?: SortOrder
  }

  export type carrosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ano_de?: SortOrder
    ano_ate?: SortOrder
    versao?: SortOrder
    montadora_id?: SortOrder
    foto_url?: SortOrder
    imagem?: SortOrder
  }

  export type carrosSumOrderByAggregateInput = {
    id?: SortOrder
    ano_de?: SortOrder
    ano_ate?: SortOrder
    montadora_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type categoriasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contatosCountOrderByAggregateInput = {
    id?: SortOrder
    departamento?: SortOrder
    colaborador?: SortOrder
    telefone?: SortOrder
    ramal?: SortOrder
    email?: SortOrder
  }

  export type contatosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contatosMaxOrderByAggregateInput = {
    id?: SortOrder
    departamento?: SortOrder
    colaborador?: SortOrder
    telefone?: SortOrder
    ramal?: SortOrder
    email?: SortOrder
  }

  export type contatosMinOrderByAggregateInput = {
    id?: SortOrder
    departamento?: SortOrder
    colaborador?: SortOrder
    telefone?: SortOrder
    ramal?: SortOrder
    email?: SortOrder
  }

  export type contatosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type duvidasCountOrderByAggregateInput = {
    id?: SortOrder
    pergunta?: SortOrder
    resposta?: SortOrder
    posicao?: SortOrder
    ordem?: SortOrder
  }

  export type duvidasAvgOrderByAggregateInput = {
    id?: SortOrder
    posicao?: SortOrder
    ordem?: SortOrder
  }

  export type duvidasMaxOrderByAggregateInput = {
    id?: SortOrder
    pergunta?: SortOrder
    resposta?: SortOrder
    posicao?: SortOrder
    ordem?: SortOrder
  }

  export type duvidasMinOrderByAggregateInput = {
    id?: SortOrder
    pergunta?: SortOrder
    resposta?: SortOrder
    posicao?: SortOrder
    ordem?: SortOrder
  }

  export type duvidasSumOrderByAggregateInput = {
    id?: SortOrder
    posicao?: SortOrder
    ordem?: SortOrder
  }

  export type manuaisCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    categoria_id?: SortOrder
    descricao?: SortOrder
  }

  export type manuaisAvgOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    categoria_id?: SortOrder
  }

  export type manuaisMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    categoria_id?: SortOrder
    descricao?: SortOrder
  }

  export type manuaisMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    conteudo?: SortOrder
    ordem?: SortOrder
    categoria_id?: SortOrder
    descricao?: SortOrder
  }

  export type manuaisSumOrderByAggregateInput = {
    id?: SortOrder
    ordem?: SortOrder
    categoria_id?: SortOrder
  }

  export type CarrosListRelationFilter = {
    every?: carrosWhereInput
    some?: carrosWhereInput
    none?: carrosWhereInput
  }

  export type carrosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type montadorasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrder
  }

  export type montadorasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type montadorasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrder
  }

  export type montadorasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    logo_url?: SortOrder
  }

  export type montadorasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type produto_fotosCountOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    foto_url?: SortOrder
  }

  export type produto_fotosAvgOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
  }

  export type produto_fotosMaxOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    foto_url?: SortOrder
  }

  export type produto_fotosMinOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    foto_url?: SortOrder
  }

  export type produto_fotosSumOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
  }

  export type produtosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    foto_url?: SortOrder
    video_url?: SortOrder
  }

  export type produtosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type produtosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    foto_url?: SortOrder
    video_url?: SortOrder
  }

  export type produtosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    foto_url?: SortOrder
    video_url?: SortOrder
  }

  export type produtosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    permissao?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    trocar_senha?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    trocar_senha?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    permissao?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    trocar_senha?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    permissao?: SortOrder
    cpf?: SortOrder
    telefone?: SortOrder
    trocar_senha?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    trocar_senha?: SortOrder
  }

  export type videosCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
  }

  export type videosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videosMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
  }

  export type videosMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
  }

  export type videosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type videos_assistidosCountOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    video_id?: SortOrder
    data_assistido?: SortOrder
  }

  export type videos_assistidosAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    video_id?: SortOrder
  }

  export type videos_assistidosMaxOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    video_id?: SortOrder
    data_assistido?: SortOrder
  }

  export type videos_assistidosMinOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    video_id?: SortOrder
    data_assistido?: SortOrder
  }

  export type videos_assistidosSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
    video_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type videos_instaladorCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
  }

  export type videos_instaladorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type videos_instaladorMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
  }

  export type videos_instaladorMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    url?: SortOrder
  }

  export type videos_instaladorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarrosScalarRelationFilter = {
    is?: carrosWhereInput
    isNot?: carrosWhereInput
  }

  export type ProdutosScalarRelationFilter = {
    is?: produtosWhereInput
    isNot?: produtosWhereInput
  }

  export type carro_produtosCarro_idProduto_idCompoundUniqueInput = {
    carro_id: bigint | number
    produto_id: bigint | number
  }

  export type carro_produtosCountOrderByAggregateInput = {
    carro_id?: SortOrder
    produto_id?: SortOrder
  }

  export type carro_produtosAvgOrderByAggregateInput = {
    carro_id?: SortOrder
    produto_id?: SortOrder
  }

  export type carro_produtosMaxOrderByAggregateInput = {
    carro_id?: SortOrder
    produto_id?: SortOrder
  }

  export type carro_produtosMinOrderByAggregateInput = {
    carro_id?: SortOrder
    produto_id?: SortOrder
  }

  export type carro_produtosSumOrderByAggregateInput = {
    carro_id?: SortOrder
    produto_id?: SortOrder
  }

  export type montadorasCreateNestedOneWithoutCarrosInput = {
    create?: XOR<montadorasCreateWithoutCarrosInput, montadorasUncheckedCreateWithoutCarrosInput>
    connectOrCreate?: montadorasCreateOrConnectWithoutCarrosInput
    connect?: montadorasWhereUniqueInput
  }

  export type carro_produtosCreateNestedManyWithoutCarroInput = {
    create?: XOR<carro_produtosCreateWithoutCarroInput, carro_produtosUncheckedCreateWithoutCarroInput> | carro_produtosCreateWithoutCarroInput[] | carro_produtosUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutCarroInput | carro_produtosCreateOrConnectWithoutCarroInput[]
    createMany?: carro_produtosCreateManyCarroInputEnvelope
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
  }

  export type carro_produtosUncheckedCreateNestedManyWithoutCarroInput = {
    create?: XOR<carro_produtosCreateWithoutCarroInput, carro_produtosUncheckedCreateWithoutCarroInput> | carro_produtosCreateWithoutCarroInput[] | carro_produtosUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutCarroInput | carro_produtosCreateOrConnectWithoutCarroInput[]
    createMany?: carro_produtosCreateManyCarroInputEnvelope
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type montadorasUpdateOneWithoutCarrosNestedInput = {
    create?: XOR<montadorasCreateWithoutCarrosInput, montadorasUncheckedCreateWithoutCarrosInput>
    connectOrCreate?: montadorasCreateOrConnectWithoutCarrosInput
    upsert?: montadorasUpsertWithoutCarrosInput
    disconnect?: montadorasWhereInput | boolean
    delete?: montadorasWhereInput | boolean
    connect?: montadorasWhereUniqueInput
    update?: XOR<XOR<montadorasUpdateToOneWithWhereWithoutCarrosInput, montadorasUpdateWithoutCarrosInput>, montadorasUncheckedUpdateWithoutCarrosInput>
  }

  export type carro_produtosUpdateManyWithoutCarroNestedInput = {
    create?: XOR<carro_produtosCreateWithoutCarroInput, carro_produtosUncheckedCreateWithoutCarroInput> | carro_produtosCreateWithoutCarroInput[] | carro_produtosUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutCarroInput | carro_produtosCreateOrConnectWithoutCarroInput[]
    upsert?: carro_produtosUpsertWithWhereUniqueWithoutCarroInput | carro_produtosUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: carro_produtosCreateManyCarroInputEnvelope
    set?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    disconnect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    delete?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    update?: carro_produtosUpdateWithWhereUniqueWithoutCarroInput | carro_produtosUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: carro_produtosUpdateManyWithWhereWithoutCarroInput | carro_produtosUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: carro_produtosScalarWhereInput | carro_produtosScalarWhereInput[]
  }

  export type carro_produtosUncheckedUpdateManyWithoutCarroNestedInput = {
    create?: XOR<carro_produtosCreateWithoutCarroInput, carro_produtosUncheckedCreateWithoutCarroInput> | carro_produtosCreateWithoutCarroInput[] | carro_produtosUncheckedCreateWithoutCarroInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutCarroInput | carro_produtosCreateOrConnectWithoutCarroInput[]
    upsert?: carro_produtosUpsertWithWhereUniqueWithoutCarroInput | carro_produtosUpsertWithWhereUniqueWithoutCarroInput[]
    createMany?: carro_produtosCreateManyCarroInputEnvelope
    set?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    disconnect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    delete?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    update?: carro_produtosUpdateWithWhereUniqueWithoutCarroInput | carro_produtosUpdateWithWhereUniqueWithoutCarroInput[]
    updateMany?: carro_produtosUpdateManyWithWhereWithoutCarroInput | carro_produtosUpdateManyWithWhereWithoutCarroInput[]
    deleteMany?: carro_produtosScalarWhereInput | carro_produtosScalarWhereInput[]
  }

  export type carrosCreateNestedManyWithoutMontadoraInput = {
    create?: XOR<carrosCreateWithoutMontadoraInput, carrosUncheckedCreateWithoutMontadoraInput> | carrosCreateWithoutMontadoraInput[] | carrosUncheckedCreateWithoutMontadoraInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMontadoraInput | carrosCreateOrConnectWithoutMontadoraInput[]
    createMany?: carrosCreateManyMontadoraInputEnvelope
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
  }

  export type carrosUncheckedCreateNestedManyWithoutMontadoraInput = {
    create?: XOR<carrosCreateWithoutMontadoraInput, carrosUncheckedCreateWithoutMontadoraInput> | carrosCreateWithoutMontadoraInput[] | carrosUncheckedCreateWithoutMontadoraInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMontadoraInput | carrosCreateOrConnectWithoutMontadoraInput[]
    createMany?: carrosCreateManyMontadoraInputEnvelope
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
  }

  export type carrosUpdateManyWithoutMontadoraNestedInput = {
    create?: XOR<carrosCreateWithoutMontadoraInput, carrosUncheckedCreateWithoutMontadoraInput> | carrosCreateWithoutMontadoraInput[] | carrosUncheckedCreateWithoutMontadoraInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMontadoraInput | carrosCreateOrConnectWithoutMontadoraInput[]
    upsert?: carrosUpsertWithWhereUniqueWithoutMontadoraInput | carrosUpsertWithWhereUniqueWithoutMontadoraInput[]
    createMany?: carrosCreateManyMontadoraInputEnvelope
    set?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    disconnect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    delete?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    update?: carrosUpdateWithWhereUniqueWithoutMontadoraInput | carrosUpdateWithWhereUniqueWithoutMontadoraInput[]
    updateMany?: carrosUpdateManyWithWhereWithoutMontadoraInput | carrosUpdateManyWithWhereWithoutMontadoraInput[]
    deleteMany?: carrosScalarWhereInput | carrosScalarWhereInput[]
  }

  export type carrosUncheckedUpdateManyWithoutMontadoraNestedInput = {
    create?: XOR<carrosCreateWithoutMontadoraInput, carrosUncheckedCreateWithoutMontadoraInput> | carrosCreateWithoutMontadoraInput[] | carrosUncheckedCreateWithoutMontadoraInput[]
    connectOrCreate?: carrosCreateOrConnectWithoutMontadoraInput | carrosCreateOrConnectWithoutMontadoraInput[]
    upsert?: carrosUpsertWithWhereUniqueWithoutMontadoraInput | carrosUpsertWithWhereUniqueWithoutMontadoraInput[]
    createMany?: carrosCreateManyMontadoraInputEnvelope
    set?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    disconnect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    delete?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    connect?: carrosWhereUniqueInput | carrosWhereUniqueInput[]
    update?: carrosUpdateWithWhereUniqueWithoutMontadoraInput | carrosUpdateWithWhereUniqueWithoutMontadoraInput[]
    updateMany?: carrosUpdateManyWithWhereWithoutMontadoraInput | carrosUpdateManyWithWhereWithoutMontadoraInput[]
    deleteMany?: carrosScalarWhereInput | carrosScalarWhereInput[]
  }

  export type carro_produtosCreateNestedManyWithoutProdutoInput = {
    create?: XOR<carro_produtosCreateWithoutProdutoInput, carro_produtosUncheckedCreateWithoutProdutoInput> | carro_produtosCreateWithoutProdutoInput[] | carro_produtosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutProdutoInput | carro_produtosCreateOrConnectWithoutProdutoInput[]
    createMany?: carro_produtosCreateManyProdutoInputEnvelope
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
  }

  export type carro_produtosUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<carro_produtosCreateWithoutProdutoInput, carro_produtosUncheckedCreateWithoutProdutoInput> | carro_produtosCreateWithoutProdutoInput[] | carro_produtosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutProdutoInput | carro_produtosCreateOrConnectWithoutProdutoInput[]
    createMany?: carro_produtosCreateManyProdutoInputEnvelope
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
  }

  export type carro_produtosUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<carro_produtosCreateWithoutProdutoInput, carro_produtosUncheckedCreateWithoutProdutoInput> | carro_produtosCreateWithoutProdutoInput[] | carro_produtosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutProdutoInput | carro_produtosCreateOrConnectWithoutProdutoInput[]
    upsert?: carro_produtosUpsertWithWhereUniqueWithoutProdutoInput | carro_produtosUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: carro_produtosCreateManyProdutoInputEnvelope
    set?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    disconnect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    delete?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    update?: carro_produtosUpdateWithWhereUniqueWithoutProdutoInput | carro_produtosUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: carro_produtosUpdateManyWithWhereWithoutProdutoInput | carro_produtosUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: carro_produtosScalarWhereInput | carro_produtosScalarWhereInput[]
  }

  export type carro_produtosUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<carro_produtosCreateWithoutProdutoInput, carro_produtosUncheckedCreateWithoutProdutoInput> | carro_produtosCreateWithoutProdutoInput[] | carro_produtosUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carro_produtosCreateOrConnectWithoutProdutoInput | carro_produtosCreateOrConnectWithoutProdutoInput[]
    upsert?: carro_produtosUpsertWithWhereUniqueWithoutProdutoInput | carro_produtosUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: carro_produtosCreateManyProdutoInputEnvelope
    set?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    disconnect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    delete?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    connect?: carro_produtosWhereUniqueInput | carro_produtosWhereUniqueInput[]
    update?: carro_produtosUpdateWithWhereUniqueWithoutProdutoInput | carro_produtosUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: carro_produtosUpdateManyWithWhereWithoutProdutoInput | carro_produtosUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: carro_produtosScalarWhereInput | carro_produtosScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type carrosCreateNestedOneWithoutProdutosInput = {
    create?: XOR<carrosCreateWithoutProdutosInput, carrosUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: carrosCreateOrConnectWithoutProdutosInput
    connect?: carrosWhereUniqueInput
  }

  export type produtosCreateNestedOneWithoutCarrosInput = {
    create?: XOR<produtosCreateWithoutCarrosInput, produtosUncheckedCreateWithoutCarrosInput>
    connectOrCreate?: produtosCreateOrConnectWithoutCarrosInput
    connect?: produtosWhereUniqueInput
  }

  export type carrosUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<carrosCreateWithoutProdutosInput, carrosUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: carrosCreateOrConnectWithoutProdutosInput
    upsert?: carrosUpsertWithoutProdutosInput
    connect?: carrosWhereUniqueInput
    update?: XOR<XOR<carrosUpdateToOneWithWhereWithoutProdutosInput, carrosUpdateWithoutProdutosInput>, carrosUncheckedUpdateWithoutProdutosInput>
  }

  export type produtosUpdateOneRequiredWithoutCarrosNestedInput = {
    create?: XOR<produtosCreateWithoutCarrosInput, produtosUncheckedCreateWithoutCarrosInput>
    connectOrCreate?: produtosCreateOrConnectWithoutCarrosInput
    upsert?: produtosUpsertWithoutCarrosInput
    connect?: produtosWhereUniqueInput
    update?: XOR<XOR<produtosUpdateToOneWithWhereWithoutCarrosInput, produtosUpdateWithoutCarrosInput>, produtosUncheckedUpdateWithoutCarrosInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type montadorasCreateWithoutCarrosInput = {
    id?: bigint | number
    nome?: string | null
    logo_url?: string | null
  }

  export type montadorasUncheckedCreateWithoutCarrosInput = {
    id?: bigint | number
    nome?: string | null
    logo_url?: string | null
  }

  export type montadorasCreateOrConnectWithoutCarrosInput = {
    where: montadorasWhereUniqueInput
    create: XOR<montadorasCreateWithoutCarrosInput, montadorasUncheckedCreateWithoutCarrosInput>
  }

  export type carro_produtosCreateWithoutCarroInput = {
    produto: produtosCreateNestedOneWithoutCarrosInput
  }

  export type carro_produtosUncheckedCreateWithoutCarroInput = {
    produto_id: bigint | number
  }

  export type carro_produtosCreateOrConnectWithoutCarroInput = {
    where: carro_produtosWhereUniqueInput
    create: XOR<carro_produtosCreateWithoutCarroInput, carro_produtosUncheckedCreateWithoutCarroInput>
  }

  export type carro_produtosCreateManyCarroInputEnvelope = {
    data: carro_produtosCreateManyCarroInput | carro_produtosCreateManyCarroInput[]
    skipDuplicates?: boolean
  }

  export type montadorasUpsertWithoutCarrosInput = {
    update: XOR<montadorasUpdateWithoutCarrosInput, montadorasUncheckedUpdateWithoutCarrosInput>
    create: XOR<montadorasCreateWithoutCarrosInput, montadorasUncheckedCreateWithoutCarrosInput>
    where?: montadorasWhereInput
  }

  export type montadorasUpdateToOneWithWhereWithoutCarrosInput = {
    where?: montadorasWhereInput
    data: XOR<montadorasUpdateWithoutCarrosInput, montadorasUncheckedUpdateWithoutCarrosInput>
  }

  export type montadorasUpdateWithoutCarrosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type montadorasUncheckedUpdateWithoutCarrosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carro_produtosUpsertWithWhereUniqueWithoutCarroInput = {
    where: carro_produtosWhereUniqueInput
    update: XOR<carro_produtosUpdateWithoutCarroInput, carro_produtosUncheckedUpdateWithoutCarroInput>
    create: XOR<carro_produtosCreateWithoutCarroInput, carro_produtosUncheckedCreateWithoutCarroInput>
  }

  export type carro_produtosUpdateWithWhereUniqueWithoutCarroInput = {
    where: carro_produtosWhereUniqueInput
    data: XOR<carro_produtosUpdateWithoutCarroInput, carro_produtosUncheckedUpdateWithoutCarroInput>
  }

  export type carro_produtosUpdateManyWithWhereWithoutCarroInput = {
    where: carro_produtosScalarWhereInput
    data: XOR<carro_produtosUpdateManyMutationInput, carro_produtosUncheckedUpdateManyWithoutCarroInput>
  }

  export type carro_produtosScalarWhereInput = {
    AND?: carro_produtosScalarWhereInput | carro_produtosScalarWhereInput[]
    OR?: carro_produtosScalarWhereInput[]
    NOT?: carro_produtosScalarWhereInput | carro_produtosScalarWhereInput[]
    carro_id?: BigIntFilter<"carro_produtos"> | bigint | number
    produto_id?: BigIntFilter<"carro_produtos"> | bigint | number
  }

  export type carrosCreateWithoutMontadoraInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    foto_url?: string | null
    imagem?: string | null
    produtos?: carro_produtosCreateNestedManyWithoutCarroInput
  }

  export type carrosUncheckedCreateWithoutMontadoraInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    foto_url?: string | null
    imagem?: string | null
    produtos?: carro_produtosUncheckedCreateNestedManyWithoutCarroInput
  }

  export type carrosCreateOrConnectWithoutMontadoraInput = {
    where: carrosWhereUniqueInput
    create: XOR<carrosCreateWithoutMontadoraInput, carrosUncheckedCreateWithoutMontadoraInput>
  }

  export type carrosCreateManyMontadoraInputEnvelope = {
    data: carrosCreateManyMontadoraInput | carrosCreateManyMontadoraInput[]
    skipDuplicates?: boolean
  }

  export type carrosUpsertWithWhereUniqueWithoutMontadoraInput = {
    where: carrosWhereUniqueInput
    update: XOR<carrosUpdateWithoutMontadoraInput, carrosUncheckedUpdateWithoutMontadoraInput>
    create: XOR<carrosCreateWithoutMontadoraInput, carrosUncheckedCreateWithoutMontadoraInput>
  }

  export type carrosUpdateWithWhereUniqueWithoutMontadoraInput = {
    where: carrosWhereUniqueInput
    data: XOR<carrosUpdateWithoutMontadoraInput, carrosUncheckedUpdateWithoutMontadoraInput>
  }

  export type carrosUpdateManyWithWhereWithoutMontadoraInput = {
    where: carrosScalarWhereInput
    data: XOR<carrosUpdateManyMutationInput, carrosUncheckedUpdateManyWithoutMontadoraInput>
  }

  export type carrosScalarWhereInput = {
    AND?: carrosScalarWhereInput | carrosScalarWhereInput[]
    OR?: carrosScalarWhereInput[]
    NOT?: carrosScalarWhereInput | carrosScalarWhereInput[]
    id?: BigIntFilter<"carros"> | bigint | number
    nome?: StringNullableFilter<"carros"> | string | null
    ano_de?: BigIntNullableFilter<"carros"> | bigint | number | null
    ano_ate?: BigIntNullableFilter<"carros"> | bigint | number | null
    versao?: StringNullableFilter<"carros"> | string | null
    montadora_id?: BigIntNullableFilter<"carros"> | bigint | number | null
    foto_url?: StringNullableFilter<"carros"> | string | null
    imagem?: StringNullableFilter<"carros"> | string | null
  }

  export type carro_produtosCreateWithoutProdutoInput = {
    carro: carrosCreateNestedOneWithoutProdutosInput
  }

  export type carro_produtosUncheckedCreateWithoutProdutoInput = {
    carro_id: bigint | number
  }

  export type carro_produtosCreateOrConnectWithoutProdutoInput = {
    where: carro_produtosWhereUniqueInput
    create: XOR<carro_produtosCreateWithoutProdutoInput, carro_produtosUncheckedCreateWithoutProdutoInput>
  }

  export type carro_produtosCreateManyProdutoInputEnvelope = {
    data: carro_produtosCreateManyProdutoInput | carro_produtosCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type carro_produtosUpsertWithWhereUniqueWithoutProdutoInput = {
    where: carro_produtosWhereUniqueInput
    update: XOR<carro_produtosUpdateWithoutProdutoInput, carro_produtosUncheckedUpdateWithoutProdutoInput>
    create: XOR<carro_produtosCreateWithoutProdutoInput, carro_produtosUncheckedCreateWithoutProdutoInput>
  }

  export type carro_produtosUpdateWithWhereUniqueWithoutProdutoInput = {
    where: carro_produtosWhereUniqueInput
    data: XOR<carro_produtosUpdateWithoutProdutoInput, carro_produtosUncheckedUpdateWithoutProdutoInput>
  }

  export type carro_produtosUpdateManyWithWhereWithoutProdutoInput = {
    where: carro_produtosScalarWhereInput
    data: XOR<carro_produtosUpdateManyMutationInput, carro_produtosUncheckedUpdateManyWithoutProdutoInput>
  }

  export type carrosCreateWithoutProdutosInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    foto_url?: string | null
    imagem?: string | null
    montadora?: montadorasCreateNestedOneWithoutCarrosInput
  }

  export type carrosUncheckedCreateWithoutProdutosInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    montadora_id?: bigint | number | null
    foto_url?: string | null
    imagem?: string | null
  }

  export type carrosCreateOrConnectWithoutProdutosInput = {
    where: carrosWhereUniqueInput
    create: XOR<carrosCreateWithoutProdutosInput, carrosUncheckedCreateWithoutProdutosInput>
  }

  export type produtosCreateWithoutCarrosInput = {
    id?: bigint | number
    nome?: string | null
    codigo?: string | null
    foto_url?: string | null
    video_url?: string | null
  }

  export type produtosUncheckedCreateWithoutCarrosInput = {
    id?: bigint | number
    nome?: string | null
    codigo?: string | null
    foto_url?: string | null
    video_url?: string | null
  }

  export type produtosCreateOrConnectWithoutCarrosInput = {
    where: produtosWhereUniqueInput
    create: XOR<produtosCreateWithoutCarrosInput, produtosUncheckedCreateWithoutCarrosInput>
  }

  export type carrosUpsertWithoutProdutosInput = {
    update: XOR<carrosUpdateWithoutProdutosInput, carrosUncheckedUpdateWithoutProdutosInput>
    create: XOR<carrosCreateWithoutProdutosInput, carrosUncheckedCreateWithoutProdutosInput>
    where?: carrosWhereInput
  }

  export type carrosUpdateToOneWithWhereWithoutProdutosInput = {
    where?: carrosWhereInput
    data: XOR<carrosUpdateWithoutProdutosInput, carrosUncheckedUpdateWithoutProdutosInput>
  }

  export type carrosUpdateWithoutProdutosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    montadora?: montadorasUpdateOneWithoutCarrosNestedInput
  }

  export type carrosUncheckedUpdateWithoutProdutosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    montadora_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtosUpsertWithoutCarrosInput = {
    update: XOR<produtosUpdateWithoutCarrosInput, produtosUncheckedUpdateWithoutCarrosInput>
    create: XOR<produtosCreateWithoutCarrosInput, produtosUncheckedCreateWithoutCarrosInput>
    where?: produtosWhereInput
  }

  export type produtosUpdateToOneWithWhereWithoutCarrosInput = {
    where?: produtosWhereInput
    data: XOR<produtosUpdateWithoutCarrosInput, produtosUncheckedUpdateWithoutCarrosInput>
  }

  export type produtosUpdateWithoutCarrosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produtosUncheckedUpdateWithoutCarrosInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carro_produtosCreateManyCarroInput = {
    produto_id: bigint | number
  }

  export type carro_produtosUpdateWithoutCarroInput = {
    produto?: produtosUpdateOneRequiredWithoutCarrosNestedInput
  }

  export type carro_produtosUncheckedUpdateWithoutCarroInput = {
    produto_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type carro_produtosUncheckedUpdateManyWithoutCarroInput = {
    produto_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type carrosCreateManyMontadoraInput = {
    id?: bigint | number
    nome?: string | null
    ano_de?: bigint | number | null
    ano_ate?: bigint | number | null
    versao?: string | null
    foto_url?: string | null
    imagem?: string | null
  }

  export type carrosUpdateWithoutMontadoraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: carro_produtosUpdateManyWithoutCarroNestedInput
  }

  export type carrosUncheckedUpdateWithoutMontadoraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: carro_produtosUncheckedUpdateManyWithoutCarroNestedInput
  }

  export type carrosUncheckedUpdateManyWithoutMontadoraInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ano_de?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ano_ate?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    versao?: NullableStringFieldUpdateOperationsInput | string | null
    foto_url?: NullableStringFieldUpdateOperationsInput | string | null
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type carro_produtosCreateManyProdutoInput = {
    carro_id: bigint | number
  }

  export type carro_produtosUpdateWithoutProdutoInput = {
    carro?: carrosUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type carro_produtosUncheckedUpdateWithoutProdutoInput = {
    carro_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type carro_produtosUncheckedUpdateManyWithoutProdutoInput = {
    carro_id?: BigIntFieldUpdateOperationsInput | bigint | number
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