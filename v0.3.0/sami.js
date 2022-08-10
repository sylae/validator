
window.projectVersion = 'v0.3.0';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:CharlotteDunois" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois.html">CharlotteDunois</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:CharlotteDunois_Validation" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois/Validation.html">Validation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:CharlotteDunois_Validation_Languages" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois/Validation/Languages.html">Languages</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CharlotteDunois_Validation_Languages_EnglishLanguage" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Languages/EnglishLanguage.html">EnglishLanguage</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Languages_GermanLanguage" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Languages/GermanLanguage.html">GermanLanguage</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:CharlotteDunois_Validation_Rules" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois/Validation/Rules.html">Rules</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CharlotteDunois_Validation_Rules_Accepted" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Accepted.html">Accepted</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_ActiveURL" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/ActiveURL.html">ActiveURL</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_After" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/After.html">After</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Alpha" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Alpha.html">Alpha</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_AlphaDash" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/AlphaDash.html">AlphaDash</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_AlphaNum" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/AlphaNum.html">AlphaNum</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_ArrayRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/ArrayRule.html">ArrayRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Before" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Before.html">Before</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Between" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Between.html">Between</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_BooleanRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/BooleanRule.html">BooleanRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_CallableRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/CallableRule.html">CallableRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Callback" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Callback.html">Callback</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_ClassRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/ClassRule.html">ClassRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Confirmed" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Confirmed.html">Confirmed</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Date" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Date.html">Date</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_DateFormat" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/DateFormat.html">DateFormat</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Different" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Different.html">Different</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Digits" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Digits.html">Digits</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Dimensions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Dimensions.html">Dimensions</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Distinct" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Distinct.html">Distinct</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Email" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Email.html">Email</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_File" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/File.html">File</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Filled" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Filled.html">Filled</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_FloatRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/FloatRule.html">FloatRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_FunctionRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/FunctionRule.html">FunctionRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_IP" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/IP.html">IP</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Image" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Image.html">Image</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_In" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/In.html">In</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_IntegerRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/IntegerRule.html">IntegerRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_JSON" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/JSON.html">JSON</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Lowercase" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Lowercase.html">Lowercase</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Max" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Max.html">Max</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_MimeTypes" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/MimeTypes.html">MimeTypes</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Min" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Min.html">Min</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_NoWhitespace" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/NoWhitespace.html">NoWhitespace</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Nullable" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Nullable.html">Nullable</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Numeric" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Numeric.html">Numeric</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Present" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Present.html">Present</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Regex" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Regex.html">Regex</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Required" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Required.html">Required</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Same" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Same.html">Same</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Size" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Size.html">Size</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_StringRule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/StringRule.html">StringRule</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_URL" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/URL.html">URL</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Rules_Uppercase" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Rules/Uppercase.html">Uppercase</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:CharlotteDunois_Validation_LanguageInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Validation/LanguageInterface.html">LanguageInterface</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_RuleInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Validation/RuleInterface.html">RuleInterface</a>                    </div>                </li>                            <li data-name="class:CharlotteDunois_Validation_Validator" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Validation/Validator.html">Validator</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "CharlotteDunois.html", "name": "CharlotteDunois", "doc": "Namespace CharlotteDunois"},{"type": "Namespace", "link": "CharlotteDunois/Validation.html", "name": "CharlotteDunois\\Validation", "doc": "Namespace CharlotteDunois\\Validation"},{"type": "Namespace", "link": "CharlotteDunois/Validation/Languages.html", "name": "CharlotteDunois\\Validation\\Languages", "doc": "Namespace CharlotteDunois\\Validation\\Languages"},{"type": "Namespace", "link": "CharlotteDunois/Validation/Rules.html", "name": "CharlotteDunois\\Validation\\Rules", "doc": "Namespace CharlotteDunois\\Validation\\Rules"},
            {"type": "Interface", "fromName": "CharlotteDunois\\Validation", "fromLink": "CharlotteDunois/Validation.html", "link": "CharlotteDunois/Validation/LanguageInterface.html", "name": "CharlotteDunois\\Validation\\LanguageInterface", "doc": "&quot;The language interface defines a strict way to get a language translation for a string (denoted by key).&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\LanguageInterface", "fromLink": "CharlotteDunois/Validation/LanguageInterface.html", "link": "CharlotteDunois/Validation/LanguageInterface.html#method_getTranslation", "name": "CharlotteDunois\\Validation\\LanguageInterface::getTranslation", "doc": "&quot;Get a translation string, denoted by key. Replace the &lt;code&gt;$replacements&lt;\/code&gt; keys by their values in that string.&quot;"},
            
            {"type": "Interface", "fromName": "CharlotteDunois\\Validation", "fromLink": "CharlotteDunois/Validation.html", "link": "CharlotteDunois/Validation/RuleInterface.html", "name": "CharlotteDunois\\Validation\\RuleInterface", "doc": "&quot;The validation rule interface every rule has to implement.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\RuleInterface", "fromLink": "CharlotteDunois/Validation/RuleInterface.html", "link": "CharlotteDunois/Validation/RuleInterface.html#method_validate", "name": "CharlotteDunois\\Validation\\RuleInterface::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation", "fromLink": "CharlotteDunois/Validation.html", "link": "CharlotteDunois/Validation/LanguageInterface.html", "name": "CharlotteDunois\\Validation\\LanguageInterface", "doc": "&quot;The language interface defines a strict way to get a language translation for a string (denoted by key).&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\LanguageInterface", "fromLink": "CharlotteDunois/Validation/LanguageInterface.html", "link": "CharlotteDunois/Validation/LanguageInterface.html#method_getTranslation", "name": "CharlotteDunois\\Validation\\LanguageInterface::getTranslation", "doc": "&quot;Get a translation string, denoted by key. Replace the &lt;code&gt;$replacements&lt;\/code&gt; keys by their values in that string.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Languages", "fromLink": "CharlotteDunois/Validation/Languages.html", "link": "CharlotteDunois/Validation/Languages/EnglishLanguage.html", "name": "CharlotteDunois\\Validation\\Languages\\EnglishLanguage", "doc": "&quot;The English language translations.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Languages\\EnglishLanguage", "fromLink": "CharlotteDunois/Validation/Languages/EnglishLanguage.html", "link": "CharlotteDunois/Validation/Languages/EnglishLanguage.html#method_getTranslation", "name": "CharlotteDunois\\Validation\\Languages\\EnglishLanguage::getTranslation", "doc": "&quot;Get a translation string, denoted by key. Replace the &lt;code&gt;$replacements&lt;\/code&gt; keys by their values in that string.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Languages", "fromLink": "CharlotteDunois/Validation/Languages.html", "link": "CharlotteDunois/Validation/Languages/GermanLanguage.html", "name": "CharlotteDunois\\Validation\\Languages\\GermanLanguage", "doc": "&quot;The German language translations.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Languages\\GermanLanguage", "fromLink": "CharlotteDunois/Validation/Languages/GermanLanguage.html", "link": "CharlotteDunois/Validation/Languages/GermanLanguage.html#method_getTranslation", "name": "CharlotteDunois\\Validation\\Languages\\GermanLanguage::getTranslation", "doc": "&quot;Get a translation string, denoted by key. Replace the &lt;code&gt;$replacements&lt;\/code&gt; keys by their values in that string.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation", "fromLink": "CharlotteDunois/Validation.html", "link": "CharlotteDunois/Validation/RuleInterface.html", "name": "CharlotteDunois\\Validation\\RuleInterface", "doc": "&quot;The validation rule interface every rule has to implement.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\RuleInterface", "fromLink": "CharlotteDunois/Validation/RuleInterface.html", "link": "CharlotteDunois/Validation/RuleInterface.html#method_validate", "name": "CharlotteDunois\\Validation\\RuleInterface::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Accepted.html", "name": "CharlotteDunois\\Validation\\Rules\\Accepted", "doc": "&quot;Name: &lt;code&gt;accepted&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Accepted", "fromLink": "CharlotteDunois/Validation/Rules/Accepted.html", "link": "CharlotteDunois/Validation/Rules/Accepted.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Accepted::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/ActiveURL.html", "name": "CharlotteDunois\\Validation\\Rules\\ActiveURL", "doc": "&quot;Name: &lt;code&gt;activeurl&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\ActiveURL", "fromLink": "CharlotteDunois/Validation/Rules/ActiveURL.html", "link": "CharlotteDunois/Validation/Rules/ActiveURL.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\ActiveURL::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/After.html", "name": "CharlotteDunois\\Validation\\Rules\\After", "doc": "&quot;Name: &lt;code&gt;after&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\After", "fromLink": "CharlotteDunois/Validation/Rules/After.html", "link": "CharlotteDunois/Validation/Rules/After.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\After::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Alpha.html", "name": "CharlotteDunois\\Validation\\Rules\\Alpha", "doc": "&quot;Name: &lt;code&gt;alpha&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Alpha", "fromLink": "CharlotteDunois/Validation/Rules/Alpha.html", "link": "CharlotteDunois/Validation/Rules/Alpha.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Alpha::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/AlphaDash.html", "name": "CharlotteDunois\\Validation\\Rules\\AlphaDash", "doc": "&quot;Name: &lt;code&gt;alphadash&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\AlphaDash", "fromLink": "CharlotteDunois/Validation/Rules/AlphaDash.html", "link": "CharlotteDunois/Validation/Rules/AlphaDash.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\AlphaDash::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/AlphaNum.html", "name": "CharlotteDunois\\Validation\\Rules\\AlphaNum", "doc": "&quot;Name: &lt;code&gt;alphanum&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\AlphaNum", "fromLink": "CharlotteDunois/Validation/Rules/AlphaNum.html", "link": "CharlotteDunois/Validation/Rules/AlphaNum.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\AlphaNum::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/ArrayRule.html", "name": "CharlotteDunois\\Validation\\Rules\\ArrayRule", "doc": "&quot;Name: &lt;code&gt;array&lt;\/code&gt; - Type Rule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\ArrayRule", "fromLink": "CharlotteDunois/Validation/Rules/ArrayRule.html", "link": "CharlotteDunois/Validation/Rules/ArrayRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\ArrayRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Before.html", "name": "CharlotteDunois\\Validation\\Rules\\Before", "doc": "&quot;Name: &lt;code&gt;before&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Before", "fromLink": "CharlotteDunois/Validation/Rules/Before.html", "link": "CharlotteDunois/Validation/Rules/Before.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Before::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Between.html", "name": "CharlotteDunois\\Validation\\Rules\\Between", "doc": "&quot;Name: &lt;code&gt;between&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Between", "fromLink": "CharlotteDunois/Validation/Rules/Between.html", "link": "CharlotteDunois/Validation/Rules/Between.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Between::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/BooleanRule.html", "name": "CharlotteDunois\\Validation\\Rules\\BooleanRule", "doc": "&quot;Name: &lt;code&gt;boolean&lt;\/code&gt; - Type Rule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\BooleanRule", "fromLink": "CharlotteDunois/Validation/Rules/BooleanRule.html", "link": "CharlotteDunois/Validation/Rules/BooleanRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\BooleanRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/CallableRule.html", "name": "CharlotteDunois\\Validation\\Rules\\CallableRule", "doc": "&quot;Name: &lt;code&gt;callable&lt;\/code&gt; - Type Rule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\CallableRule", "fromLink": "CharlotteDunois/Validation/Rules/CallableRule.html", "link": "CharlotteDunois/Validation/Rules/CallableRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\CallableRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Callback.html", "name": "CharlotteDunois\\Validation\\Rules\\Callback", "doc": "&quot;Name: &lt;code&gt;callback&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Callback", "fromLink": "CharlotteDunois/Validation/Rules/Callback.html", "link": "CharlotteDunois/Validation/Rules/Callback.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Callback::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Callback", "fromLink": "CharlotteDunois/Validation/Rules/Callback.html", "link": "CharlotteDunois/Validation/Rules/Callback.html#method_prototype", "name": "CharlotteDunois\\Validation\\Rules\\Callback::prototype", "doc": "&quot;Turns a callable into a callback signature.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/ClassRule.html", "name": "CharlotteDunois\\Validation\\Rules\\ClassRule", "doc": "&quot;Name: &lt;code&gt;class&lt;\/code&gt; - Type Rule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\ClassRule", "fromLink": "CharlotteDunois/Validation/Rules/ClassRule.html", "link": "CharlotteDunois/Validation/Rules/ClassRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\ClassRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Confirmed.html", "name": "CharlotteDunois\\Validation\\Rules\\Confirmed", "doc": "&quot;Name: &lt;code&gt;confirmed&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Confirmed", "fromLink": "CharlotteDunois/Validation/Rules/Confirmed.html", "link": "CharlotteDunois/Validation/Rules/Confirmed.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Confirmed::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Date.html", "name": "CharlotteDunois\\Validation\\Rules\\Date", "doc": "&quot;Name: &lt;code&gt;date&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Date", "fromLink": "CharlotteDunois/Validation/Rules/Date.html", "link": "CharlotteDunois/Validation/Rules/Date.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Date::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/DateFormat.html", "name": "CharlotteDunois\\Validation\\Rules\\DateFormat", "doc": "&quot;Name: &lt;code&gt;dateformat&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\DateFormat", "fromLink": "CharlotteDunois/Validation/Rules/DateFormat.html", "link": "CharlotteDunois/Validation/Rules/DateFormat.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\DateFormat::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Different.html", "name": "CharlotteDunois\\Validation\\Rules\\Different", "doc": "&quot;Name: &lt;code&gt;different&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Different", "fromLink": "CharlotteDunois/Validation/Rules/Different.html", "link": "CharlotteDunois/Validation/Rules/Different.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Different::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Digits.html", "name": "CharlotteDunois\\Validation\\Rules\\Digits", "doc": "&quot;Name: &lt;code&gt;digits&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Digits", "fromLink": "CharlotteDunois/Validation/Rules/Digits.html", "link": "CharlotteDunois/Validation/Rules/Digits.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Digits::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Dimensions.html", "name": "CharlotteDunois\\Validation\\Rules\\Dimensions", "doc": "&quot;Name: &lt;code&gt;dimensions&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Dimensions", "fromLink": "CharlotteDunois/Validation/Rules/Dimensions.html", "link": "CharlotteDunois/Validation/Rules/Dimensions.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Dimensions::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Distinct.html", "name": "CharlotteDunois\\Validation\\Rules\\Distinct", "doc": "&quot;Name: &lt;code&gt;distinct&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Distinct", "fromLink": "CharlotteDunois/Validation/Rules/Distinct.html", "link": "CharlotteDunois/Validation/Rules/Distinct.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Distinct::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Email.html", "name": "CharlotteDunois\\Validation\\Rules\\Email", "doc": "&quot;Name: &lt;code&gt;email&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Email", "fromLink": "CharlotteDunois/Validation/Rules/Email.html", "link": "CharlotteDunois/Validation/Rules/Email.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Email::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/File.html", "name": "CharlotteDunois\\Validation\\Rules\\File", "doc": "&quot;Name: &lt;code&gt;file&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\File", "fromLink": "CharlotteDunois/Validation/Rules/File.html", "link": "CharlotteDunois/Validation/Rules/File.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\File::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Filled.html", "name": "CharlotteDunois\\Validation\\Rules\\Filled", "doc": "&quot;Name: &lt;code&gt;filled&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Filled", "fromLink": "CharlotteDunois/Validation/Rules/Filled.html", "link": "CharlotteDunois/Validation/Rules/Filled.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Filled::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/FloatRule.html", "name": "CharlotteDunois\\Validation\\Rules\\FloatRule", "doc": "&quot;Name: &lt;code&gt;float&lt;\/code&gt; - Type Rule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\FloatRule", "fromLink": "CharlotteDunois/Validation/Rules/FloatRule.html", "link": "CharlotteDunois/Validation/Rules/FloatRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\FloatRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/FunctionRule.html", "name": "CharlotteDunois\\Validation\\Rules\\FunctionRule", "doc": "&quot;Name: &lt;code&gt;function&lt;\/code&gt; - Type Rule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\FunctionRule", "fromLink": "CharlotteDunois/Validation/Rules/FunctionRule.html", "link": "CharlotteDunois/Validation/Rules/FunctionRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\FunctionRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/IP.html", "name": "CharlotteDunois\\Validation\\Rules\\IP", "doc": "&quot;Name: &lt;code&gt;ip&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\IP", "fromLink": "CharlotteDunois/Validation/Rules/IP.html", "link": "CharlotteDunois/Validation/Rules/IP.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\IP::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Image.html", "name": "CharlotteDunois\\Validation\\Rules\\Image", "doc": "&quot;Name: &lt;code&gt;image&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Image", "fromLink": "CharlotteDunois/Validation/Rules/Image.html", "link": "CharlotteDunois/Validation/Rules/Image.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Image::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/In.html", "name": "CharlotteDunois\\Validation\\Rules\\In", "doc": "&quot;Name: &lt;code&gt;in&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\In", "fromLink": "CharlotteDunois/Validation/Rules/In.html", "link": "CharlotteDunois/Validation/Rules/In.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\In::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/IntegerRule.html", "name": "CharlotteDunois\\Validation\\Rules\\IntegerRule", "doc": "&quot;Name: &lt;code&gt;integer&lt;\/code&gt; - Type Rule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\IntegerRule", "fromLink": "CharlotteDunois/Validation/Rules/IntegerRule.html", "link": "CharlotteDunois/Validation/Rules/IntegerRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\IntegerRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/JSON.html", "name": "CharlotteDunois\\Validation\\Rules\\JSON", "doc": "&quot;Name: &lt;code&gt;json&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\JSON", "fromLink": "CharlotteDunois/Validation/Rules/JSON.html", "link": "CharlotteDunois/Validation/Rules/JSON.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\JSON::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Lowercase.html", "name": "CharlotteDunois\\Validation\\Rules\\Lowercase", "doc": "&quot;Name: &lt;code&gt;lowercase&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Lowercase", "fromLink": "CharlotteDunois/Validation/Rules/Lowercase.html", "link": "CharlotteDunois/Validation/Rules/Lowercase.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Lowercase::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Max.html", "name": "CharlotteDunois\\Validation\\Rules\\Max", "doc": "&quot;Name: &lt;code&gt;max&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Max", "fromLink": "CharlotteDunois/Validation/Rules/Max.html", "link": "CharlotteDunois/Validation/Rules/Max.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Max::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/MimeTypes.html", "name": "CharlotteDunois\\Validation\\Rules\\MimeTypes", "doc": "&quot;Name: &lt;code&gt;mimetypes&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\MimeTypes", "fromLink": "CharlotteDunois/Validation/Rules/MimeTypes.html", "link": "CharlotteDunois/Validation/Rules/MimeTypes.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\MimeTypes::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Min.html", "name": "CharlotteDunois\\Validation\\Rules\\Min", "doc": "&quot;Name: &lt;code&gt;min&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Min", "fromLink": "CharlotteDunois/Validation/Rules/Min.html", "link": "CharlotteDunois/Validation/Rules/Min.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Min::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/NoWhitespace.html", "name": "CharlotteDunois\\Validation\\Rules\\NoWhitespace", "doc": "&quot;Name: &lt;code&gt;nowhitespace&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\NoWhitespace", "fromLink": "CharlotteDunois/Validation/Rules/NoWhitespace.html", "link": "CharlotteDunois/Validation/Rules/NoWhitespace.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\NoWhitespace::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Nullable.html", "name": "CharlotteDunois\\Validation\\Rules\\Nullable", "doc": "&quot;Name: &lt;code&gt;nullable&lt;\/code&gt;&quot;"},
                    
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Numeric.html", "name": "CharlotteDunois\\Validation\\Rules\\Numeric", "doc": "&quot;Name: &lt;code&gt;numeric&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Numeric", "fromLink": "CharlotteDunois/Validation/Rules/Numeric.html", "link": "CharlotteDunois/Validation/Rules/Numeric.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Numeric::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Present.html", "name": "CharlotteDunois\\Validation\\Rules\\Present", "doc": "&quot;Name: &lt;code&gt;present&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Present", "fromLink": "CharlotteDunois/Validation/Rules/Present.html", "link": "CharlotteDunois/Validation/Rules/Present.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Present::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Regex.html", "name": "CharlotteDunois\\Validation\\Rules\\Regex", "doc": "&quot;Name: &lt;code&gt;regex&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Regex", "fromLink": "CharlotteDunois/Validation/Rules/Regex.html", "link": "CharlotteDunois/Validation/Rules/Regex.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Regex::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Required.html", "name": "CharlotteDunois\\Validation\\Rules\\Required", "doc": "&quot;Name: &lt;code&gt;required&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Required", "fromLink": "CharlotteDunois/Validation/Rules/Required.html", "link": "CharlotteDunois/Validation/Rules/Required.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Required::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Same.html", "name": "CharlotteDunois\\Validation\\Rules\\Same", "doc": "&quot;Name: &lt;code&gt;same&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Same", "fromLink": "CharlotteDunois/Validation/Rules/Same.html", "link": "CharlotteDunois/Validation/Rules/Same.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Same::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Size.html", "name": "CharlotteDunois\\Validation\\Rules\\Size", "doc": "&quot;Name: &lt;code&gt;size&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Size", "fromLink": "CharlotteDunois/Validation/Rules/Size.html", "link": "CharlotteDunois/Validation/Rules/Size.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Size::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/StringRule.html", "name": "CharlotteDunois\\Validation\\Rules\\StringRule", "doc": "&quot;Name: &lt;code&gt;string&lt;\/code&gt; - TypeRule&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\StringRule", "fromLink": "CharlotteDunois/Validation/Rules/StringRule.html", "link": "CharlotteDunois/Validation/Rules/StringRule.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\StringRule::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/URL.html", "name": "CharlotteDunois\\Validation\\Rules\\URL", "doc": "&quot;Name: &lt;code&gt;url&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\URL", "fromLink": "CharlotteDunois/Validation/Rules/URL.html", "link": "CharlotteDunois/Validation/Rules/URL.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\URL::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation\\Rules", "fromLink": "CharlotteDunois/Validation/Rules.html", "link": "CharlotteDunois/Validation/Rules/Uppercase.html", "name": "CharlotteDunois\\Validation\\Rules\\Uppercase", "doc": "&quot;Name: &lt;code&gt;uppercase&lt;\/code&gt;&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Rules\\Uppercase", "fromLink": "CharlotteDunois/Validation/Rules/Uppercase.html", "link": "CharlotteDunois/Validation/Rules/Uppercase.html#method_validate", "name": "CharlotteDunois\\Validation\\Rules\\Uppercase::validate", "doc": "&quot;This method validates the value using the rule&#039;s implementation.&quot;"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Validation", "fromLink": "CharlotteDunois/Validation.html", "link": "CharlotteDunois/Validation/Validator.html", "name": "CharlotteDunois\\Validation\\Validator", "doc": "&quot;The Validator.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method___construct", "name": "CharlotteDunois\\Validation\\Validator::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_make", "name": "CharlotteDunois\\Validation\\Validator::make", "doc": "&quot;Create a new Validator instance.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_addRule", "name": "CharlotteDunois\\Validation\\Validator::addRule", "doc": "&quot;Adds a new rule.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_setDefaultLanguage", "name": "CharlotteDunois\\Validation\\Validator::setDefaultLanguage", "doc": "&quot;Sets the default language for the Validator.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_setLanguage", "name": "CharlotteDunois\\Validation\\Validator::setLanguage", "doc": "&quot;Sets the language for the Validator.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_errors", "name": "CharlotteDunois\\Validation\\Validator::errors", "doc": "&quot;Returns errors.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_passes", "name": "CharlotteDunois\\Validation\\Validator::passes", "doc": "&quot;Determine if the data passes the validation rules.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_fails", "name": "CharlotteDunois\\Validation\\Validator::fails", "doc": "&quot;Determine if the data fails the validation rules.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_throw", "name": "CharlotteDunois\\Validation\\Validator::throw", "doc": "&quot;Determines if the data passes the validation rules, or throws.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_startValidation", "name": "CharlotteDunois\\Validation\\Validator::startValidation", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_language", "name": "CharlotteDunois\\Validation\\Validator::language", "doc": "&quot;Return the error message based on the language key (language based).&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Validation\\Validator", "fromLink": "CharlotteDunois/Validation/Validator.html", "link": "CharlotteDunois/Validation/Validator.html#method_initRules", "name": "CharlotteDunois\\Validation\\Validator::initRules", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


