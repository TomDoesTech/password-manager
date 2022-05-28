import { getModelForClass, pre, prop } from "@typegoose/typegoose";
import argon2 from "argon2";

@pre<User>("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    const hash = await argon2.hash(this.password);

    this.password = hash;

    return next();
  }
})
export class User {
  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});
