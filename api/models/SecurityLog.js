/**
* SecurityLog.js
*
* @description    :: Stores the security log
* @humpback-docs  :: https://github.com/CaliStyle/humpback/wiki/Models#securitylog
* @sails-docs     :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    autoPK: false,
  
    autoUpdatedAt: false,
  
    autoCreatedAt: false,
  
    description: 'Represents a Security Log Entry.',

    //Global Permissions override all local permissions
    private: true,

    reserved: true,

    attributes: {
        /**
         * 
         */
        request: {
            model: 'RequestLog',
            primaryKey: true    
        }
    }
};
