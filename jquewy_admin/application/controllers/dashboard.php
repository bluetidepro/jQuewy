<?php
class Dashboard extends Controller {

	function index() {

		$this->load->model('Db');
		
		parse_str($_SERVER['QUERY_STRING'], $_GET);
		
		if (!@$_GET['genre']){
			$genre_id = '';
		} else {
			$genre_id = $this->Db->genre_name_to_id($_GET['genre']);
		}
		
		if (!@$_GET['locale']){
			$locale = $this->Db->locale_to_url('eu');
		} else {
			$locale = $this->Db->locale_to_url($_GET['locale']);
		}
		
		
		$resource_list = $this->Db->genre_id_to_resources($genre_id);
		foreach ($resource_list as $item){
			$resources_arr = $this->Db->resource_id_to_resources($item['id']);
			
			foreach($resources_arr as $r){
				if($r['hosted']){
					$r['url'] = $locale . $r['url'];
					unset($r['hosted']);
				}
				$r['usage'] = $this->Db->get_usage_from_type($r['type']);
				unset($r['type']);
				$return[ $item['name'] ][] = $r;
			}
		}
		
			// Taken from http://bit.ly/a48Fne
		function flash_encode ($input) {
			return rawurlencode(utf8_encode($input));
		}
		
		$counter=0;
		$arr_size_outer = (count($return)-1);
		
		$re = '
jQuewy.extend(jQuewy, {
	data: function(){
		var s = {';
		
		// For each resource
		foreach($return as $k => $i){
			$re .= '"' . $k . '":{"script" : ['."\n";
				$arr_size_inner = (count($i)-1);
				$c=0;
				//For each item
				foreach( $i as $r ){
					//Encode for Javascript
					$re .= '"';
					$re .= flash_encode($r['usage']['before'] . $r['url'] . $r['usage']['after']);
					$re .= '"'."\n";
					if ($arr_size_inner > $c){ $re .= ","; }
					$c++;
				}
			$re .= ']}'."\n";
			if ($arr_size_outer > $counter){ $re .= ","; }
			$counter++;
		}
		
		$re .= '};
		return s;
	}
});';
		
		$this->load->view('header');
		echo $re;
	}
	
}
?>
