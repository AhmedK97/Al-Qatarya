-- CreateTable
CREATE TABLE `Instance` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NULL,
    `connectionStatus` ENUM('ONLINE', 'OFFLINE') NULL DEFAULT 'OFFLINE',
    `ownerJid` VARCHAR(100) NULL,
    `profilePicUrl` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Instance_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auth` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `token` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `instanceId` BIGINT NOT NULL,

    UNIQUE INDEX `Auth_token_key`(`token`),
    UNIQUE INDEX `Auth_instanceId_key`(`instanceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `keyId` VARCHAR(100) NOT NULL,
    `keyRemoteJid` VARCHAR(100) NOT NULL,
    `keyFromMe` BOOLEAN NOT NULL,
    `keyParticipant` VARCHAR(100) NULL,
    `pushName` VARCHAR(100) NULL,
    `messageType` VARCHAR(100) NOT NULL,
    `content` JSON NOT NULL,
    `messageTimestamp` BIGINT NOT NULL,
    `device` ENUM('ios', 'android', 'web') NOT NULL,
    `isGroup` BOOLEAN NULL,
    `instanceId` BIGINT NOT NULL,
    `typebotSessionId` BIGINT NULL,

    INDEX `keyId`(`keyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Media` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `fileName` VARCHAR(500) NOT NULL,
    `type` VARCHAR(100) NOT NULL,
    `mimetype` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `messageId` BIGINT NOT NULL,

    UNIQUE INDEX `Media_fileName_key`(`fileName`),
    UNIQUE INDEX `Media_messageId_key`(`messageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MessageUpdate` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateTime` DATETIME(3) NOT NULL,
    `status` VARCHAR(30) NOT NULL,
    `messageId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `remoteJid` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `instanceId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `remoteJid` VARCHAR(100) NOT NULL,
    `pushName` VARCHAR(100) NULL,
    `profilePicUrl` VARCHAR(500) NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `instanceId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Webhook` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(500) NOT NULL,
    `enabled` BOOLEAN NULL DEFAULT true,
    `events` JSON NULL,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `instanceId` BIGINT NOT NULL,

    UNIQUE INDEX `Webhook_instanceId_key`(`instanceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Typebot` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `publicId` VARCHAR(200) NOT NULL,
    `typebotUrl` VARCHAR(500) NOT NULL,
    `enabled` BOOLEAN NULL DEFAULT true,
    `enableGroup` BOOLEAN NULL DEFAULT false,
    `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NULL,
    `instanceId` BIGINT NOT NULL,

    UNIQUE INDEX `Typebot_instanceId_key`(`instanceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypebotSession` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `sessionId` VARCHAR(200) NOT NULL,
    `remoteJid` VARCHAR(100) NOT NULL,
    `status` ENUM('open', 'closed', 'paused') NOT NULL DEFAULT 'open',
    `typebotId` BIGINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActivityLogs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `dateTime` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `context` VARCHAR(100) NULL,
    `type` VARCHAR(100) NULL,
    `content` JSON NULL,
    `description` VARCHAR(500) NULL,
    `instanceId` BIGINT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Auth` ADD CONSTRAINT `Auth_instanceId_fkey` FOREIGN KEY (`instanceId`) REFERENCES `Instance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_instanceId_fkey` FOREIGN KEY (`instanceId`) REFERENCES `Instance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_typebotSessionId_fkey` FOREIGN KEY (`typebotSessionId`) REFERENCES `TypebotSession`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Media` ADD CONSTRAINT `Media_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `Message`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MessageUpdate` ADD CONSTRAINT `MessageUpdate_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `Message`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chat` ADD CONSTRAINT `Chat_instanceId_fkey` FOREIGN KEY (`instanceId`) REFERENCES `Instance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `Contact_instanceId_fkey` FOREIGN KEY (`instanceId`) REFERENCES `Instance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Webhook` ADD CONSTRAINT `Webhook_instanceId_fkey` FOREIGN KEY (`instanceId`) REFERENCES `Instance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Typebot` ADD CONSTRAINT `Typebot_instanceId_fkey` FOREIGN KEY (`instanceId`) REFERENCES `Instance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TypebotSession` ADD CONSTRAINT `TypebotSession_typebotId_fkey` FOREIGN KEY (`typebotId`) REFERENCES `Typebot`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActivityLogs` ADD CONSTRAINT `ActivityLogs_instanceId_fkey` FOREIGN KEY (`instanceId`) REFERENCES `Instance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
