import mongoose, { Document, Schema, Types } from "mongoose";

export interface IOrganizationMember extends Document {
  organization: Types.ObjectId;
  user: Types.ObjectId;
  role: string;
  status: "invited" | "active" | "removed";
  joinedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const organizationMemberSchema = new Schema<IOrganizationMember>(
  {
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["invited", "active", "removed"],
      default: "invited",
    },

    joinedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

organizationMemberSchema.index(
  { organization: 1, user: 1 },
  { unique: true }
);

const OrganizationMember = mongoose.model<IOrganizationMember>(
  "OrganizationMember",
  organizationMemberSchema
);

export default OrganizationMember;