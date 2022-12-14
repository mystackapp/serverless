import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
}

export interface AdminRegisterInput {
  password: Scalars['String'];
  username: Scalars['String'];
}

export interface AdminRegisterOutput {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String'];
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
}

/** columns and relationships of "admin" */
export interface Admin {
  __typename?: 'admin';
  id: Scalars['uuid'];
  password: Scalars['String'];
  username: Scalars['String'];
}

/** aggregated selection of "admin" */
export interface Admin_Aggregate {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Admin[];
}

/** aggregate fields of "admin" */
export interface Admin_Aggregate_Fields {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
}

/** aggregate fields of "admin" */
export interface Admin_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Admin_Select_Column[]>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export interface Admin_Bool_Exp {
  _and?: InputMaybe<Admin_Bool_Exp[]>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Admin_Bool_Exp[]>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key',
}

/** input type for inserting data into table "admin" */
export interface Admin_Insert_Input {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}

/** aggregate max on columns */
export interface Admin_Max_Fields {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

/** aggregate min on columns */
export interface Admin_Min_Fields {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}

/** response of any mutation on the table "admin" */
export interface Admin_Mutation_Response {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Admin[];
}

/** on_conflict condition type for table "admin" */
export interface Admin_On_Conflict {
  constraint: Admin_Constraint;
  update_columns?: Admin_Update_Column[];
  where?: InputMaybe<Admin_Bool_Exp>;
}

/** Ordering options when selecting data from "admin". */
export interface Admin_Order_By {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
}

/** primary key columns input for table: admin */
export interface Admin_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "admin" */
export interface Admin_Set_Input {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}

/** Streaming cursor of the table "admin" */
export interface Admin_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Admin_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['uuid']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username',
}

export interface Admin_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "menu" */
export interface Menu {
  __typename?: 'menu';
  id: Scalars['uuid'];
  image: Scalars['String'];
  ingredients: Scalars['String'];
  price: Scalars['numeric'];
  title: Scalars['String'];
  weight: Scalars['numeric'];
}

/** aggregated selection of "menu" */
export interface Menu_Aggregate {
  __typename?: 'menu_aggregate';
  aggregate?: Maybe<Menu_Aggregate_Fields>;
  nodes: Menu[];
}

/** aggregate fields of "menu" */
export interface Menu_Aggregate_Fields {
  __typename?: 'menu_aggregate_fields';
  avg?: Maybe<Menu_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Menu_Max_Fields>;
  min?: Maybe<Menu_Min_Fields>;
  stddev?: Maybe<Menu_Stddev_Fields>;
  stddev_pop?: Maybe<Menu_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Menu_Stddev_Samp_Fields>;
  sum?: Maybe<Menu_Sum_Fields>;
  var_pop?: Maybe<Menu_Var_Pop_Fields>;
  var_samp?: Maybe<Menu_Var_Samp_Fields>;
  variance?: Maybe<Menu_Variance_Fields>;
}

/** aggregate fields of "menu" */
export interface Menu_Aggregate_FieldsCountArgs {
  columns?: InputMaybe<Menu_Select_Column[]>;
  distinct?: InputMaybe<Scalars['Boolean']>;
}

/** aggregate avg on columns */
export interface Menu_Avg_Fields {
  __typename?: 'menu_avg_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
}

/** Boolean expression to filter rows from the table "menu". All fields are combined with a logical 'AND'. */
export interface Menu_Bool_Exp {
  _and?: InputMaybe<Menu_Bool_Exp[]>;
  _not?: InputMaybe<Menu_Bool_Exp>;
  _or?: InputMaybe<Menu_Bool_Exp[]>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  ingredients?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
}

/** unique or primary key constraints on table "menu" */
export enum Menu_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuPkey = 'menu_pkey',
}

/** input type for incrementing numeric columns in table "menu" */
export interface Menu_Inc_Input {
  price?: InputMaybe<Scalars['numeric']>;
  weight?: InputMaybe<Scalars['numeric']>;
}

/** input type for inserting data into table "menu" */
export interface Menu_Insert_Input {
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
}

/** aggregate max on columns */
export interface Menu_Max_Fields {
  __typename?: 'menu_max_fields';
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
}

/** aggregate min on columns */
export interface Menu_Min_Fields {
  __typename?: 'menu_min_fields';
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
}

/** response of any mutation on the table "menu" */
export interface Menu_Mutation_Response {
  __typename?: 'menu_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Menu[];
}

/** on_conflict condition type for table "menu" */
export interface Menu_On_Conflict {
  constraint: Menu_Constraint;
  update_columns?: Menu_Update_Column[];
  where?: InputMaybe<Menu_Bool_Exp>;
}

/** Ordering options when selecting data from "menu". */
export interface Menu_Order_By {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
}

/** primary key columns input for table: menu */
export interface Menu_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "menu" */
export enum Menu_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight',
}

/** input type for updating data in table "menu" */
export interface Menu_Set_Input {
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
}

/** aggregate stddev on columns */
export interface Menu_Stddev_Fields {
  __typename?: 'menu_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_pop on columns */
export interface Menu_Stddev_Pop_Fields {
  __typename?: 'menu_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
}

/** aggregate stddev_samp on columns */
export interface Menu_Stddev_Samp_Fields {
  __typename?: 'menu_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
}

/** Streaming cursor of the table "menu" */
export interface Menu_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Menu_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Menu_Stream_Cursor_Value_Input {
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
}

/** aggregate sum on columns */
export interface Menu_Sum_Fields {
  __typename?: 'menu_sum_fields';
  price?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
}

/** update columns of table "menu" */
export enum Menu_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Price = 'price',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight',
}

export interface Menu_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Menu_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
}

/** aggregate var_pop on columns */
export interface Menu_Var_Pop_Fields {
  __typename?: 'menu_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
}

/** aggregate var_samp on columns */
export interface Menu_Var_Samp_Fields {
  __typename?: 'menu_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
}

/** aggregate variance on columns */
export interface Menu_Variance_Fields {
  __typename?: 'menu_variance_fields';
  price?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
}

/** mutation root */
export interface Mutation_Root {
  __typename?: 'mutation_root';
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "menu" */
  delete_menu?: Maybe<Menu_Mutation_Response>;
  /** delete single row from the table: "menu" */
  delete_menu_by_pk?: Maybe<Menu>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "menu" */
  insert_menu?: Maybe<Menu_Mutation_Response>;
  /** insert a single row into the table: "menu" */
  insert_menu_one?: Maybe<Menu>;
  /** Admin registration */
  register?: Maybe<AdminRegisterOutput>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "menu" */
  update_menu?: Maybe<Menu_Mutation_Response>;
  /** update single row of the table: "menu" */
  update_menu_by_pk?: Maybe<Menu>;
  /** update multiples rows of table: "menu" */
  update_menu_many?: Maybe<Array<Maybe<Menu_Mutation_Response>>>;
}

/** mutation root */
export interface Mutation_RootDelete_AdminArgs {
  where: Admin_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_Admin_By_PkArgs {
  id: Scalars['uuid'];
}

/** mutation root */
export interface Mutation_RootDelete_MenuArgs {
  where: Menu_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootDelete_Menu_By_PkArgs {
  id: Scalars['uuid'];
}

/** mutation root */
export interface Mutation_RootInsert_AdminArgs {
  objects: Admin_Insert_Input[];
  on_conflict?: InputMaybe<Admin_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_Admin_OneArgs {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_MenuArgs {
  objects: Menu_Insert_Input[];
  on_conflict?: InputMaybe<Menu_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootInsert_Menu_OneArgs {
  object: Menu_Insert_Input;
  on_conflict?: InputMaybe<Menu_On_Conflict>;
}

/** mutation root */
export interface Mutation_RootRegisterArgs {
  admin: AdminRegisterInput;
}

/** mutation root */
export interface Mutation_RootUpdate_AdminArgs {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_Admin_By_PkArgs {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_Admin_ManyArgs {
  updates: Admin_Updates[];
}

/** mutation root */
export interface Mutation_RootUpdate_MenuArgs {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  where: Menu_Bool_Exp;
}

/** mutation root */
export interface Mutation_RootUpdate_Menu_By_PkArgs {
  _inc?: InputMaybe<Menu_Inc_Input>;
  _set?: InputMaybe<Menu_Set_Input>;
  pk_columns: Menu_Pk_Columns_Input;
}

/** mutation root */
export interface Mutation_RootUpdate_Menu_ManyArgs {
  updates: Menu_Updates[];
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export interface Numeric_Comparison_Exp {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export interface Query_Root {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Admin[];
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "menu" */
  menu: Menu[];
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
}

export interface Query_RootAdminArgs {
  distinct_on?: InputMaybe<Admin_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Admin_Order_By[]>;
  where?: InputMaybe<Admin_Bool_Exp>;
}

export interface Query_RootAdmin_AggregateArgs {
  distinct_on?: InputMaybe<Admin_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Admin_Order_By[]>;
  where?: InputMaybe<Admin_Bool_Exp>;
}

export interface Query_RootAdmin_By_PkArgs {
  id: Scalars['uuid'];
}

export interface Query_RootMenuArgs {
  distinct_on?: InputMaybe<Menu_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Menu_Order_By[]>;
  where?: InputMaybe<Menu_Bool_Exp>;
}

export interface Query_RootMenu_AggregateArgs {
  distinct_on?: InputMaybe<Menu_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Menu_Order_By[]>;
  where?: InputMaybe<Menu_Bool_Exp>;
}

export interface Query_RootMenu_By_PkArgs {
  id: Scalars['uuid'];
}

export interface Subscription_Root {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Admin[];
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Admin[];
  /** fetch data from the table: "menu" */
  menu: Menu[];
  /** fetch aggregated fields from the table: "menu" */
  menu_aggregate: Menu_Aggregate;
  /** fetch data from the table: "menu" using primary key columns */
  menu_by_pk?: Maybe<Menu>;
  /** fetch data from the table in a streaming manner: "menu" */
  menu_stream: Menu[];
}

export interface Subscription_RootAdminArgs {
  distinct_on?: InputMaybe<Admin_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Admin_Order_By[]>;
  where?: InputMaybe<Admin_Bool_Exp>;
}

export interface Subscription_RootAdmin_AggregateArgs {
  distinct_on?: InputMaybe<Admin_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Admin_Order_By[]>;
  where?: InputMaybe<Admin_Bool_Exp>;
}

export interface Subscription_RootAdmin_By_PkArgs {
  id: Scalars['uuid'];
}

export interface Subscription_RootAdmin_StreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
}

export interface Subscription_RootMenuArgs {
  distinct_on?: InputMaybe<Menu_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Menu_Order_By[]>;
  where?: InputMaybe<Menu_Bool_Exp>;
}

export interface Subscription_RootMenu_AggregateArgs {
  distinct_on?: InputMaybe<Menu_Select_Column[]>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Menu_Order_By[]>;
  where?: InputMaybe<Menu_Bool_Exp>;
}

export interface Subscription_RootMenu_By_PkArgs {
  id: Scalars['uuid'];
}

export interface Subscription_RootMenu_StreamArgs {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Menu_Stream_Cursor_Input>>;
  where?: InputMaybe<Menu_Bool_Exp>;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
}

export type InsertAdminMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
}>;

export interface InsertAdminMutation {
  __typename?: 'mutation_root';
  insert_admin?: {
    __typename?: 'admin_mutation_response';
    returning: Array<{
      __typename?: 'admin';
      id: any;
    }>;
  } | null;
}

export const InsertAdminDocument = gql`
  mutation InsertAdmin($password: String = "", $username: String = "") {
    insert_admin(objects: { password: $password, username: $username }) {
      returning {
        id
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = async (
  action,
  _operationName,
  _operationType
) => await action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    async InsertAdmin(
      variables?: InsertAdminMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<InsertAdminMutation> {
      return await withWrapper(
        async (wrappedRequestHeaders) =>
          await client.request<InsertAdminMutation>(
            InsertAdminDocument,
            variables,
            {
              ...requestHeaders,
              ...wrappedRequestHeaders,
            }
          ),
        'InsertAdmin',
        'mutation'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
