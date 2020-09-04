import { Migration } from 'mikro-orm';

export class Migration20200904085801 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" drop constraint if exists "post_updated_at_check";');
    this.addSql('alter table "post" alter column "updated_at" type timestamptz(0) using ("updated_at"::timestamptz(0));');
    this.addSql('alter table "post" alter column "updated_at" set default NOW();');

    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null default NOW(), "updated_at" timestamptz(0) not null default NOW(), "username" text not null, "password" text not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
