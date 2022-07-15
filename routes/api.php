<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::namespace('Api')
    ->prefix('posts')
    ->group(function(){
        Route::get('/{slut}', 'PageController@show');
        Route::get('/', 'PageController@index');


    });
