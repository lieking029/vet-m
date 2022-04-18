<?php

namespace App\Jobs;
 
use App\Mail\RegisterMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class RegisterJob implements ShouldQueue
{
  use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
  public $data, $to;
  /**
   * Create a new job instance.
   *
   * @return void
   */
  public function __construct($data, $to)
  {
    $this->data = $data;
    $this->to = $to; 
  }

  /**
   * Execute the job.
   *
   * @return void
   */
  public function handle()
  { 
      Mail::to($this->to)->queue(new RegisterMail($this->data)); 
  }
}
