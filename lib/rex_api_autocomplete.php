<?php

class rex_api_autocomplete extends rex_api_function
{
    /**
     * @inheritDoc
     */
    public function execute() {
        $targetTable = rex_get('target', 'string');
        $targetColumn = rex_get('column', 'string');
        $query = rex_get('query', 'string');

        $sql = rex_sql::factory();
        $sql->setTable($targetTable);
        $sql->setWhere($targetColumn . ' LIKE ?', ['%' . $query . '%']);
        $sql->select('*');

        if ($sql->getRows()) {
            rex_response::sendJson($sql->getArray());
        }

        exit();
    }
}
