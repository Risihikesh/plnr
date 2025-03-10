CREATE TABLE `Assets` (
	`asset_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`asset_type` varchar(255) NOT NULL,
	`asset_value` decimal,
	`description` text,
	CONSTRAINT `Assets_asset_id` PRIMARY KEY(`asset_id`)
);
--> statement-breakpoint
CREATE TABLE `Blog` (
	`blog_id` serial AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` text NOT NULL,
	`author` varchar(50) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `Blog_blog_id` PRIMARY KEY(`blog_id`)
);
--> statement-breakpoint
CREATE TABLE `CashFlow` (
	`cashflow_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`income_source` varchar(255) NOT NULL,
	`income_amount` decimal NOT NULL,
	`expense_type` varchar(255) NOT NULL,
	`expense_amount` decimal NOT NULL,
	`net_savings` decimal NOT NULL,
	`record_date` date,
	CONSTRAINT `CashFlow_cashflow_id` PRIMARY KEY(`cashflow_id`)
);
--> statement-breakpoint
CREATE TABLE `Contact` (
	`contact_id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `Contact_contact_id` PRIMARY KEY(`contact_id`)
);
--> statement-breakpoint
CREATE TABLE `Documents` (
	`document_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`document_name` varchar(255),
	`file_url` text,
	`uploaded_at` timestamp DEFAULT (now()),
	CONSTRAINT `Documents_document_id` PRIMARY KEY(`document_id`)
);
--> statement-breakpoint
CREATE TABLE `Employement` (
	`employment_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`company_name` varchar(255) NOT NULL,
	`designation` varchar(255) NOT NULL,
	`date_of_joining` date,
	`basic_salary` decimal,
	`take_home_salary` decimal,
	`annual_increase` decimal,
	`pf_accumulated_amount` decimal,
	`pf_employee_contribution` decimal,
	`pf_employer_contribution` decimal,
	`vp_employee_contribution` decimal,
	`nps_accumulated_amount` decimal,
	`nps_employee_contribution` decimal,
	`nps_employer_contribution` decimal,
	`gratuity_eligible` boolean,
	`gratuity_amount` decimal,
	`pension_eligible` boolean,
	`pension_amount` decimal,
	`superannuation_amount` decimal,
	`superannuation_return` decimal,
	CONSTRAINT `Employement_employment_id` PRIMARY KEY(`employment_id`)
);
--> statement-breakpoint
CREATE TABLE `FAQs` (
	`faq_id` serial AUTO_INCREMENT NOT NULL,
	`question` text NOT NULL,
	`answer` text NOT NULL,
	`category` varchar(255) NOT NULL,
	CONSTRAINT `FAQs_faq_id` PRIMARY KEY(`faq_id`)
);
--> statement-breakpoint
CREATE TABLE `FamilyDetails` (
	`family_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`member_name` varchar(50) NOT NULL,
	`relation` varchar(50) NOT NULL,
	`age` int NOT NULL,
	`dependency_status` boolean DEFAULT false,
	CONSTRAINT `FamilyDetails_family_id` PRIMARY KEY(`family_id`)
);
--> statement-breakpoint
CREATE TABLE `Goals` (
	`goal_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`goal_name` varchar(255),
	`amount_required` decimal,
	`time_frame` int,
	`goal_type` varchar(255),
	CONSTRAINT `Goals_goal_id` PRIMARY KEY(`goal_id`)
);
--> statement-breakpoint
CREATE TABLE `Insurance` (
	`insurance_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`insurance_type` varchar(255) NOT NULL,
	`policy_details` text,
	`premium` decimal NOT NULL,
	`coverage_amount` decimal NOT NULL,
	CONSTRAINT `Insurance_insurance_id` PRIMARY KEY(`insurance_id`)
);
--> statement-breakpoint
CREATE TABLE `Loans` (
	`loan_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`loan_type` varchar(255) NOT NULL,
	`amount` decimal NOT NULL,
	`interest_rate` decimal,
	`term` int NOT NULL,
	`monthly_payment` decimal NOT NULL,
	CONSTRAINT `Loans_loan_id` PRIMARY KEY(`loan_id`)
);
--> statement-breakpoint
CREATE TABLE `PersonalDetails` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`name` varchar(30) NOT NULL,
	`identity` varchar(255),
	`occupation` varchar(255),
	`martial_status` varchar(30),
	`gender` varchar(30),
	`residential_status` varchar(255),
	`dob` date,
	`address` text,
	CONSTRAINT `PersonalDetails_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Policies` (
	`policy_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`policy_name` varchar(255) NOT NULL,
	`policy_type` varchar(255) NOT NULL,
	`policy_provider` varchar(255) NOT NULL,
	`coverage_amount` decimal NOT NULL,
	`premium` decimal NOT NULL,
	`start_date` date,
	`end_date` date,
	CONSTRAINT `Policies_policy_id` PRIMARY KEY(`policy_id`)
);
--> statement-breakpoint
CREATE TABLE `Reports` (
	`report_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`report_type` varchar(255) NOT NULL,
	`file_url` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `Reports_report_id` PRIMARY KEY(`report_id`)
);
--> statement-breakpoint
CREATE TABLE `Services` (
	`service_id` serial AUTO_INCREMENT NOT NULL,
	`service_name` varchar(255) NOT NULL,
	`description` text NOT NULL,
	`pricing` text NOT NULL,
	`benefits` text NOT NULL,
	CONSTRAINT `Services_service_id` PRIMARY KEY(`service_id`)
);
--> statement-breakpoint
CREATE TABLE `Settings` (
	`settings_id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255),
	`two_factor_enabled` boolean DEFAULT false,
	`password` varchar(50) NOT NULL,
	`account_status` varchar(50) NOT NULL,
	CONSTRAINT `Settings_settings_id` PRIMARY KEY(`settings_id`)
);
--> statement-breakpoint
CREATE TABLE `account` (
	`userId` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`provider` varchar(255) NOT NULL,
	`providerAccountId` varchar(255) NOT NULL,
	`refresh_token` varchar(255),
	`access_token` varchar(255),
	`expires_at` int,
	`token_type` varchar(255),
	`scope` varchar(255),
	`id_token` varchar(2048),
	`session_state` varchar(255),
	CONSTRAINT `account_provider_providerAccountId_pk` PRIMARY KEY(`provider`,`providerAccountId`)
);
--> statement-breakpoint
CREATE TABLE `authenticator` (
	`credentialID` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`providerAccountId` varchar(255) NOT NULL,
	`credentialPublicKey` varchar(255) NOT NULL,
	`counter` int NOT NULL,
	`credentialDeviceType` varchar(255) NOT NULL,
	`credentialBackedUp` boolean NOT NULL,
	`transports` varchar(255),
	CONSTRAINT `authenticator_userId_credentialID_pk` PRIMARY KEY(`userId`,`credentialID`),
	CONSTRAINT `authenticator_credentialID_unique` UNIQUE(`credentialID`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`sessionToken` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `session_sessionToken` PRIMARY KEY(`sessionToken`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`email` varchar(255),
	`emailVerified` timestamp(3),
	`image` varchar(255),
	`password` varchar(255),
	`mobileNumber` varchar(255),
	`verificationToken` varchar(255) DEFAULT '',
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `verificationToken_identifier_token_pk` PRIMARY KEY(`identifier`,`token`)
);
--> statement-breakpoint
ALTER TABLE `Assets` ADD CONSTRAINT `Assets_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `CashFlow` ADD CONSTRAINT `CashFlow_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Documents` ADD CONSTRAINT `Documents_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Employement` ADD CONSTRAINT `Employement_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `FamilyDetails` ADD CONSTRAINT `FamilyDetails_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Goals` ADD CONSTRAINT `Goals_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Insurance` ADD CONSTRAINT `Insurance_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Loans` ADD CONSTRAINT `Loans_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `PersonalDetails` ADD CONSTRAINT `PersonalDetails_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Policies` ADD CONSTRAINT `Policies_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Reports` ADD CONSTRAINT `Reports_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `Settings` ADD CONSTRAINT `Settings_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `account` ADD CONSTRAINT `account_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `authenticator` ADD CONSTRAINT `authenticator_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `session` ADD CONSTRAINT `session_userId_user_id_fk` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;