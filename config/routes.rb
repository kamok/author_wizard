Rails.application.routes.draw do
  scope '/api' do
    resources :books, except: [:new, :edit]
  end
end
