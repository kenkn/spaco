/*
 * spa.util.js
*/

/*jslint          browser : true,  continue : true,
  devel  : true,  indent  : 2,     maxerr   : 50,
  newcap : true,  nomen   : true,  plusplus : true,
  regexp : true,  sloppy  : true,  vars     : false,
  white  : true
*/
/*global $, spa */

spa.util = (function () {
  console.log("util");
  var makeError, setConfigMap;

  // パブリックコンストラクタ /makeError/ 開始
  // 目的: エラーオブジェクトを作成する便利なラッパー
  // 引数:
  //   * name_text - エラー名
  //   * msg_text  - 長いエラーメッセージ
  //   * data      - エラーオブジェクトに付加するオプションのデータ
  // 戻り値  : 新たに作成されたエラーオブジェクト
  // 例外発行: none
  //
  makeError = function ( name_text, msg_text, data ) {
    console.log("makeerror util");
    var error     = new Error();
    error.name    = name_text;
    error.message = msg_text;

    if ( data ){ error.data = data; }

    return error;
  };
  // パブリックコンストラクタ /makeError/ 終了

  // パブリックメソッド /setConfigMap/ 開始
  // 目的: 機能モジュールで構成を行うための共通コード
  // 引数:
  //   * input_map    - 構成するキーバリューマップ
  //   * settable_map - 構成できるキーのマップ
  //   * config_map   - 構成を適用するマップ
  // 戻り値: true
  // 例外発行 : 入力キーが許可されてない場合例外発行
  //
  setConfigMap = function ( arg_map ){
    console.log("setconfigmap util");
    var
      input_map    = arg_map.input_map,
      settable_map = arg_map.settable_map,
      config_map   = arg_map.config_map,
      key_name, error;

    for ( key_name in input_map ){
      if ( input_map.hasOwnProperty( key_name ) ){
        if ( settable_map.hasOwnProperty( key_name ) ){
          config_map[key_name] = input_map[key_name];
        }
        else {
          error = makeError( 'Bad Input',
            'Setting config key |' + key_name + '| is not supported'
          );
          throw error;
        }
      }
    }
  };
  // パブリックメソッド /setConfigMap/ 終了

  return {
    makeError    : makeError,
    setConfigMap : setConfigMap
  };
}());
