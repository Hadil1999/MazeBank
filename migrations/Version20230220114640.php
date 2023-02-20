<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230220114640 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reclamation ADD client_name_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE reclamation ADD CONSTRAINT FK_CE606404232AD8AB FOREIGN KEY (client_name_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_CE606404232AD8AB ON reclamation (client_name_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE reclamation DROP FOREIGN KEY FK_CE606404232AD8AB');
        $this->addSql('DROP INDEX IDX_CE606404232AD8AB ON reclamation');
        $this->addSql('ALTER TABLE reclamation DROP client_name_id');
    }
}
