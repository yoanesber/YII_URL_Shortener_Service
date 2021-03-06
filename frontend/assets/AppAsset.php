<?php

namespace frontend\assets;

use yii\web\AssetBundle;

/**
 * Main frontend application asset bundle.
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/site.css',
        'assets/30f5b990/js/bootstrap-datetimepicker.min.css'
    ];
    public $js = [
        'js/googlechart.js',
        'js/site.js',
        'assets/30f5b990/js/moment-with-locales.js',
        'assets/30f5b990/js/bootstrap-datetimepicker.min.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}
