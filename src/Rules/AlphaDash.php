<?php
/**
 * Validator
 * Copyright 2017-2019 Charlotte Dunois, All Rights Reserved
 *
 * Website: https://charuru.moe
 * License: https://github.com/CharlotteDunois/Validator/blob/master/LICENSE
**/

namespace CharlotteDunois\Validation\Rules;

/**
 * Name: `alphadash`
 *
 * This rule ensures a specific field contains only alpha, dash and underscores characters.
 */
class AlphaDash implements \CharlotteDunois\Validation\RuleInterface {
    /**
     * {@inheritdoc}
     * @return bool|string|array
     */
    function validate($value, $key, $fields, $options, $exists, \CharlotteDunois\Validation\Validator $validator) {
        if(!$exists) {
            return false;
        }
        
        if(!\is_string($value) || \preg_match('/[^A-Za-z\-_]/u', $value)) {
            return 'formvalidator_make_alpha_dash';
        }
        
        return true;
    }
}
