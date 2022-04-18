<?php

namespace App;

use App\Notifications\ResetPassword;
use App\Notifications\VerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable; 
use Tymon\JWTAuth\Contracts\JWTSubject;  
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable; 


class User extends Authenticatable implements JWTSubject //, MustVerifyEmail
{ 
    use Notifiable, HasRoles; 
    protected $guard_name = 'api';
   
    protected $guarded = ['id'];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'photo_url' , 'permissionslist', 'fullname'
    ];

    /**
     * Get the profile photo URL attribute.
     *
     * @return string
     */
    public function getPhotoUrlAttribute()
    {
        return 'https://www.gravatar.com/avatar/'.md5(strtolower($this->email)).'.jpg?s=200&d=mm';
    }
    public function getPermissionslistAttribute(){ 
        return  \Auth::user()->getDirectPermissions()->pluck('name');
    }

    /**
     * Get the oauth providers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function oauthProviders()
    {
        return $this->hasMany(OAuthProvider::class);
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail);
    }

    /**
     * @return int
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function routeNotificationForNexmo($notification)
    {
        return '';
    }
  

    public static function getUserPermissions($user)
    {
        return [];
    }

    public static function getUserRoles($user)
    {
        return [];
    }
     


    /**
     * retrieve date format
     * of app.
     *
     */
    public static function appDateFormat()
    {
        // $value = System::where('key', 'date_format')->value('value');
        $value = 'm/d/Y';
        if ($value == 'd-m-Y') {
            return ['KEY' => 'd-m-Y', 'VALUE' => 'DD-MM-YYYY'];
        } elseif ($value == 'm-d-Y') {
            return ['KEY' => 'm-d-Y', 'VALUE' => 'MM-DD-YYYY'];
        } elseif ($value == 'd/m/Y') {
            return ['KEY' => 'd/m/Y', 'VALUE' => 'DD/MM/YYYY'];
        } elseif ($value == 'm/d/Y') {
            return ['KEY' => 'm/d/Y', 'VALUE' => 'MM/DD/YYYY'];
        }
    }

    public function getFullnameAttribute(){
        return  $this->last_name . ', '. $this->first_name . ($this->middle_name? ' '. substr($this->middle_name,0,1).".":''); 
    }

    /**
     * retrieve time format
     * of app.
     *
     */
    public static function appTimeFormat()
    {
        // $value = System::where('key', 'time_format')->value('value');
        $value = '12';
        return $value;
    }

    
  
}
