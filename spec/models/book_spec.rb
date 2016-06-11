require 'rails_helper'

RSpec.describe Book, type: :model do
  before do
    @book = FactoryGirl.create(:book)
  end

  describe 'name' do
    it 'must be present' do
      @book.name = nil
      expect(@book).not_to be_valid
    end

    it 'must be unique' do
      other_book = @book.dup
      expect(other_book).not_to be_valid
    end
  end
end
