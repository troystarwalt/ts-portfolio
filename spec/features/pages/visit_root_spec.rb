require 'rails_helper'

RSpec.feature 'Visiting root route' do
  let(:admin) { FactoryGirl.create(:admin, :confirmed) }
  scenario 'as a guest you see nothing.' do
    visit '/'

    expect(page).not_to have_button('Sign Out')
  end
end
