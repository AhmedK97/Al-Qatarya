-- DropIndex
DROP INDEX `Auth_token_key` ON `auth`;

-- AlterTable
ALTER TABLE `auth` MODIFY `token` TEXT NOT NULL;
