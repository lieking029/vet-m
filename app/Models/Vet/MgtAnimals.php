<?php

namespace App\Models\Vet;

use App\Models\TblGenerals;
use Illuminate\Database\Eloquent\Model;

class MgtAnimals extends Model
{
    protected $guarded = ['id'];

    public function types()
    {
        return $this->hasOne(TblGenerals::class, 'id', 'type');
    }
    
}
