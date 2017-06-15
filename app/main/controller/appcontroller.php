<?php
/**
 * Created by PhpStorm.
 * User: exodus4d
 * Date: 28.04.15
 * Time: 21:27
 */

namespace Controller;

use Controller\Ccp as Ccp;
use lib\Config;

class AppController extends Controller {

    /**
     * event handler after routing
     * @param \Base $f3
     */
    public function afterroute(\Base $f3){
        parent::afterroute($f3);

        // clear all SSO related temp data
        if( $f3->exists(Ccp\Sso::SESSION_KEY_SSO) ){
            $f3->clear(Ccp\Sso::SESSION_KEY_SSO);
        }
    }

    /**
     * show main login (index) page
     * @param \Base $f3
     */
    public function init(\Base $f3) {
        // page title
        $f3->set('tplPageTitle',  Config::getPathfinderData('name'));

        // main page content
        $f3->set('tplPageContent', Config::getPathfinderData('view.login'));

        // body element class
        $f3->set('tplBodyClass', 'pf-landing');

        // JS main file
        $f3->set('tplJsView', 'login');

        // href for SSO Auth
        $f3->set('tplAuthType', $f3->alias( 'sso', ['action' => 'requestAuthorization'] ));

        // characters  from cookies
        $f3->set('cookieCharacters', $this->getCookieByName(self::COOKIE_PREFIX_CHARACTER, true));
        $f3->set('getCharacterGrid', function($characters){
            return ( ((12 / count($characters)) <= 3) ? 3 : (12 / count($characters)) );
        });
    }

}