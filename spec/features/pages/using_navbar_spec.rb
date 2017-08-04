require 'rails_helper'

RSpec.feature 'Clicking on navbar links' do

  before do
    visit '/admins/sign_in'
    click_link 'TS'
  end

  scenario 'clicking the logo will take you to root' do
    expect(current_path).to eq(root_path)
  end
end
