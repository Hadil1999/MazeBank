<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230220153417 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE type_card (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_carte (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE carte_bancaire ADD idtypecarte_id INT DEFAULT NULL, ADD email VARCHAR(255) NOT NULL, ADD identifier VARCHAR(255) NOT NULL, ADD description VARCHAR(255) NOT NULL, ADD cin_s1 VARCHAR(255) NOT NULL, ADD cin_s2 VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE carte_bancaire ADD CONSTRAINT FK_59E3C22DD3013F37 FOREIGN KEY (idtypecarte_id) REFERENCES type_carte (id)');
        $this->addSql('CREATE INDEX IDX_59E3C22DD3013F37 ON carte_bancaire (idtypecarte_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE carte_bancaire DROP FOREIGN KEY FK_59E3C22DD3013F37');
        $this->addSql('DROP TABLE type_card');
        $this->addSql('DROP TABLE type_carte');
        $this->addSql('DROP INDEX IDX_59E3C22DD3013F37 ON carte_bancaire');
        $this->addSql('ALTER TABLE carte_bancaire DROP idtypecarte_id, DROP email, DROP identifier, DROP description, DROP cin_s1, DROP cin_s2');
    }
}
