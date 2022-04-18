<?php
 
use Illuminate\Support\Facades\Route;
 
//login 
Route::group(['middleware' => 'guest'], function () { 
    Route::post('login', 'Guest\LoginController@login');
    Route::post('register', 'Guest\RegisterController@register');
    Route::post('password/send', 'Guest\RegisterController@sendLink'); 
    Route::get('password/param', 'Guest\RegisterController@getData'); 
    Route::post('password/reset', 'Guest\RegisterController@resetPassword'); 
});
  
Route::group(['middleware' => 'api'], function () {
    Route::get('user', 'Auth\UserController@current');   
    Route::post('password/change', 'Auth\UserController@changePassword'); 
    Route::get('role/list', 'General\MainController@getRoleList');  

     //manage user 
        Route::get('user/list', 'Staff\StaffController@list'); 
        Route::post('user/approve', 'Staff\StaffController@approveUser');   
        Route::post('user/active', 'Staff\StaffController@activeUser'); 
        Route::post('user/save', 'Staff\StaffController@saveUser'); 
        Route::post('user/send', 'Staff\StaffController@sendResetPassword');  
       


   
        // accounts
        Route::get('account/list', 'Vet\AccountsController@list'); 
        Route::post('account/approve', 'Vet\AccountsController@approveUser');   
        Route::post('account/active', 'Vet\AccountsController@activeUser'); 
        Route::post('account/save', 'Vet\AccountsController@saveUser');  
        Route::post('account/attachment', 'Vet\AccountsController@attachmentUser'); 


        // vet
        Route::get('vet/pets/list', 'Vet\AnimalController@list'); 
        Route::post('vet/pets/attachment', 'Vet\AnimalController@attachment'); 
        Route::post('vet/pets/save', 'Vet\AnimalController@save');   
        Route::get('vet/pets/dropdowns', 'Vet\AnimalController@dropdowns');   
        Route::post('vet/pets/picture', 'Vet\AnimalController@picture');  
        Route::post('vet/pets/active', 'Vet\AnimalController@active'); 

        Route::get('vet/animals/list', 'Vet\AnimalController@animalList'); 
        Route::post('vet/animals/attachment', 'Vet\AnimalController@animalAttachment'); 
        Route::post('vet/animals/save', 'Vet\AnimalController@animalSave');   
        Route::get('vet/animals/dropdowns', 'Vet\AnimalController@animalDropdowns');   
        Route::post('vet/animals/picture', 'Vet\AnimalController@animalPicture');  
        Route::post('vet/animals/active', 'Vet\AnimalController@animalActive'); 
      

      
        Route::get('vet/services/list', 'Vet\ServicesController@list'); 
        Route::post('vet/services/attachment', 'Vet\ServicesController@attachment'); 
        Route::post('vet/services/save', 'Vet\ServicesController@save');    
        Route::post('vet/services/picture', 'Vet\ServicesController@picture');   
 
        Route::get('vet/products/list', 'Vet\ProductsController@list'); 
        Route::post('vet/products/attachment', 'Vet\ProductsController@attachment'); 
        Route::post('vet/products/save', 'Vet\ProductsController@save');    
        Route::post('vet/products/picture', 'Vet\ProductsController@picture');   
        Route::get('vet/products/category', 'Vet\ProductsController@categoryList');   

        Route::get('vet/stocks/list', 'Vet\StocksController@list'); 
        Route::post('vet/stocks/attachment', 'Vet\StocksController@attachment'); 
        Route::post('vet/stocks/save', 'Vet\StocksController@save');    
        Route::post('vet/stocks/picture', 'Vet\StocksController@picture');   


        Route::get('vet/shop/cart/list', 'Vet\CartController@list'); 
        Route::post('vet/shop/cart/save', 'Vet\CartController@save');    
        Route::post('vet/shop/cart/delete', 'Vet\CartController@delete');     
        Route::post('vet/shop/cart/change', 'Vet\CartController@itemChange');    
        Route::post('vet/shop/cart/checkout', 'Vet\CartController@checkout'); 
        Route::post('vet/shop/cart/remove', 'Vet\CartController@removeAll');    


        Route::get('vet/appointment/list', 'Vet\AppointmentController@list'); 
        Route::post('vet/appointment/save', 'Vet\AppointmentController@save');    
        Route::post('vet/appointment/delete', 'Vet\AppointmentController@delete');      
        Route::get('vet/appointment/animal/list', 'Vet\AppointmentController@animalList'); 
        Route::get('vet/appointment/pet/list', 'Vet\AppointmentController@petList'); 
        Route::get('vet/appointment/service/list', 'Vet\AppointmentController@serviceList'); 
        Route::post('vet/appointment/cancel', 'Vet\AppointmentController@cancel');   
        Route::get('vet/appointment/status/list', 'Vet\AppointmentController@statusList'); 
        Route::post('vet/appointment/process', 'Vet\AppointmentController@statusChange');   
 

        Route::get('vet/sales/list', 'Vet\SalesController@list');    
        Route::get('vet/sales/details/list', 'Vet\SalesController@detailsList');    




        Route::get('vet/reports/year/list', 'Vet\ReportsController@yearList');     
        Route::get('vet/reports/status/list', 'Vet\ReportsController@statusList');    
        Route::get('vet/reports/export', 'Vet\ReportsController@report');    






        Route::get('vet/dashboard/appointments', 'Vet\MainController@appointmentList'); 
        Route::get('vet/dashboard/counts', 'Vet\MainController@summaryCount');  


 
       

    //settings 
        //General
        Route::post('settings/general/store', 'General\MainController@storeGeneral');  
        Route::post('settings/general/active', 'General\MainController@activeGeneral');  
        Route::get('settings/general/list', 'General\MainController@getGeneralList'); 
        Route::get('settings/general/sub/list', 'General\MainController@getSubGeneralList'); 
        Route::get('settings/general/group/list', 'General\MainController@getGeneralListGroup'); 
        Route::get('general/seeder',    'General\MainController@createSeeder');
     
        //reports
        Route::get('report/export', 'Reports\ReportController@data');  

            //roles
        Route::get('settings/roles/list', 'General\MainController@getRoles');     
        Route::post('settings/roles/store', 'General\MainController@storeRole'); 
        Route::post('settings/roles/remove', 'General\MainController@removeRole');
        Route::post('settings/role/permission/store', 'General\MainController@storeRolePermission');  
            //permissions
        Route::get('settings/permissions/list', 'General\MainController@getPermission');   
        Route::post('settings/permissions/store', 'General\MainController@storePermission'); 
        Route::post('settings/permissions/remove', 'General\MainController@removePermission');  
   

});