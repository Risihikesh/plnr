import {
    boolean,
    date,
    decimal,
    int,
    mysqlTable,
    serial,
    text,
    timestamp,
    primaryKey,
    varchar,
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("user", {
    id: varchar("id", { length: 255 })
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).unique(),
    emailVerified: timestamp("emailVerified", {
        mode: "date",
        fsp: 3,
    }),
    image: varchar("image", { length: 255 }),
    password: varchar("password", { length: 255 }),
    mobileNumber: varchar("mobileNumber", { length: 255 }),
    verificationToken: varchar("verificationToken", { length: 255 }).default(
        ""
    ),
});

export const accounts = mysqlTable(
    "account",
    {
        userId: varchar("userId", { length: 255 })
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: varchar("type", { length: 255 }).$type().notNull(),
        provider: varchar("provider", { length: 255 }).notNull(),
        providerAccountId: varchar("providerAccountId", {
            length: 255,
        }).notNull(),
        refresh_token: varchar("refresh_token", { length: 255 }),
        access_token: varchar("access_token", { length: 255 }),
        expires_at: int("expires_at"),
        token_type: varchar("token_type", { length: 255 }),
        scope: varchar("scope", { length: 255 }),
        id_token: varchar("id_token", { length: 2048 }),
        session_state: varchar("session_state", { length: 255 }),
    },
    (account) => [
        primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    ]
);

export const sessions = mysqlTable("session", {
    sessionToken: varchar("sessionToken", { length: 255 }).primaryKey(),
    userId: varchar("userId", { length: 255 })
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = mysqlTable(
    "verificationToken",
    {
        identifier: varchar("identifier", { length: 255 }).notNull(),
        token: varchar("token", { length: 255 }).notNull(),
        expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken) => [
        primaryKey({
            columns: [verificationToken.identifier, verificationToken.token],
        }),
    ]
);

export const authenticators = mysqlTable(
    "authenticator",
    {
        credentialID: varchar("credentialID", { length: 255 })
            .notNull()
            .unique(),
        userId: varchar("userId", { length: 255 })
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        providerAccountId: varchar("providerAccountId", {
            length: 255,
        }).notNull(),
        credentialPublicKey: varchar("credentialPublicKey", {
            length: 255,
        }).notNull(),
        counter: int("counter").notNull(),
        credentialDeviceType: varchar("credentialDeviceType", {
            length: 255,
        }).notNull(),
        credentialBackedUp: boolean("credentialBackedUp").notNull(),
        transports: varchar("transports", { length: 255 }),
    },
    (authenticator) => [
        primaryKey({
            columns: [authenticator.userId, authenticator.credentialID],
        }),
    ]
);

export const Assets = mysqlTable("Assets", {
    asset_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    asset_type: varchar({ length: 255 }).notNull(),
    asset_value: decimal(),
    description: text(),
});

export const PersonalDetails = mysqlTable("PersonalDetails", {
    id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    name: varchar({ length: 30 }).notNull(),
    identity: varchar({ length: 255 }),
    occupation: varchar({ length: 255 }),
    martial_status: varchar({ length: 30 }),
    gender: varchar({ length: 30 }),
    residential_status: varchar({ length: 255 }),
    dob: date(),
    address: text(),
});

export const Settings = mysqlTable("Settings", {
    settings_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    two_factor_enabled: boolean().default(false),
    password: varchar({ length: 50 }).notNull(),
    account_status: varchar({ length: 50 }).notNull(),
});

export const Employement = mysqlTable("Employement", {
    employment_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    company_name: varchar({ length: 255 }).notNull(),
    designation: varchar({ length: 255 }).notNull(),
    date_of_joining: date(),
    basic_salary: decimal(),
    take_home_salary: decimal(),
    annual_increase: decimal(),
    pf_accumulated_amount: decimal(),
    pf_employee_contribution: decimal(),
    pf_employer_contribution: decimal(),
    vp_employee_contribution: decimal(),
    nps_accumulated_amount: decimal(),
    nps_employee_contribution: decimal(),
    nps_employer_contribution: decimal(),
    gratuity_eligible: boolean(),
    gratuity_amount: decimal(),
    pension_eligible: boolean(),
    pension_amount: decimal(),
    superannuation_amount: decimal(),
    superannuation_return: decimal(),
});

export const Policies = mysqlTable("Policies", {
    policy_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    policy_name: varchar({ length: 255 }).notNull(),
    policy_type: varchar({ length: 255 }).notNull(),
    policy_provider: varchar({ length: 255 }).notNull(),
    coverage_amount: decimal().notNull(),
    premium: decimal().notNull(),
    start_date: date(),
    end_date: date(),
});

export const Reports = mysqlTable("Reports", {
    report_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    report_type: varchar({ length: 255 }).notNull(),
    file_url: text().notNull(),
    created_at: timestamp().defaultNow(),
});

export const Documents = mysqlTable("Documents", {
    document_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    document_name: varchar({ length: 255 }),
    file_url: text(),
    uploaded_at: timestamp().defaultNow(),
});

export const Goals = mysqlTable("Goals", {
    goal_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    goal_name: varchar({ length: 255 }),
    amount_required: decimal(),
    time_frame: int(),
    goal_type: varchar({ length: 255 }),
});

export const Insurance = mysqlTable("Insurance", {
    insurance_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    insurance_type: varchar({ length: 255 }).notNull(),
    policy_details: text(),
    premium: decimal().notNull(),
    coverage_amount: decimal().notNull(),
});

export const Loans = mysqlTable("Loans", {
    loan_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    loan_type: varchar({ length: 255 }).notNull(),
    amount: decimal().notNull(),
    interest_rate: decimal(),
    term: int().notNull(),
    monthly_payment: decimal().notNull(),
});

export const CashFlow = mysqlTable("CashFlow", {
    cashflow_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    income_source: varchar({ length: 255 }).notNull(),
    income_amount: decimal().notNull(),
    expense_type: varchar({ length: 255 }).notNull(),
    expense_amount: decimal().notNull(),
    net_savings: decimal().notNull(),
    record_date: date(),
});

export const FamilyDetails = mysqlTable("FamilyDetails", {
    family_id: serial().primaryKey(),
    user_id: varchar({ length: 255 }).references(() => users.id),
    member_name: varchar({ length: 50 }).notNull(),
    relation: varchar({ length: 50 }).notNull(),
    age: int().notNull(),
    dependency_status: boolean().default(false),
});

export const FAQs = mysqlTable("FAQs", {
    faq_id: serial().primaryKey(),
    question: text().notNull(),
    answer: text().notNull(),
    category: varchar({ length: 255 }).notNull(),
});

export const Blog = mysqlTable("Blog", {
    blog_id: serial().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    content: text().notNull(),
    author: varchar({ length: 50 }).notNull(),
    created_at: timestamp().defaultNow(),
});

export const Services = mysqlTable("Services", {
    service_id: serial().primaryKey(),
    service_name: varchar({ length: 255 }).notNull(),
    description: text().notNull(),
    pricing: text().notNull(),
    benefits: text().notNull(),
});

export const Contact = mysqlTable("Contact", {
    contact_id: serial().primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    phone: varchar({ length: 255 }).notNull(),
    message: text().notNull(),
    created_at: timestamp().defaultNow(),
});
