require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get visit" do
    get pages_visit_url
    assert_response :success
  end

  test "should get inter" do
    get pages_inter_url
    assert_response :success
  end

  test "should get others" do
    get pages_others_url
    assert_response :success
  end

end
