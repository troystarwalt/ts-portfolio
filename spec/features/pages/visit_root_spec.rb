require 'rails_helper'

RSpec.feature 'Visiting root route' do
  let(:admin) { FactoryGirl.create(:admin, :confirmed) }
  scenario 'As a visitor, you see navbar' do
    visit '/'
    expect(page).to have_link('who')
  end

  scenario 'As a visitor, you see the opening header' do
    visit '/'
    expect(page).to have_selector('h1')
  end
end
