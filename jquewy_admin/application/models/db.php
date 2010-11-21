<?php

class Db extends Model {
	function Db()
	{
		// Call the Model constructor
		parent::Model();
		$this->load->database();
	}
	
	//Convert a locale's name or ID into a url structure.
	function locale_to_url($locale){
		$this->db->select('url');
		$this->db->where( 'name', strtolower($locale) );
		$this->db->or_where('id',$locale);
		$q = $this->db->get('locales');
		$q = $q->first_row('array');
		return $q['url'];
	}
	
	//Turn a type name or ID into a skeleton for usage on a page.
	function get_usage_from_type($type){
		$this->db->select('before,after');
		$this->db->where( 'type', strtolower($type) );
		$this->db->or_where( 'id', $type);
		$q = $this->db->get('uses');
		$q = $q->first_row('array');
		return $q;
	}
	
	//Turn a genre name or ID into the ID of the genre into the genre ID
	function genre_name_to_id($genre){
		$this->db->select('id');
		$this->db->where( 'name',strtolower($genre) );
		$this->db->or_where('id',$genre);
		$q = $this->db->get('genres');
		$q = $q->first_row('array');
		return $q['id'];
	}
	
	//Turn a genre's ID into an array of resources.
	function genre_id_to_resources($id){
		if (!$id == ''){
			$this->db->where('genre_id',$id);
		}
		$q = $this->db->get('resources');
		return $q->result_array();
	}
	
	//Turn a resource's name into its associative ID
	function name_to_resource_id($name){
		$this->db->select('id');
		$this->db->where( 'name', strtolower($name) );
		$q = $this->db->get('resources');
		$q = $q->first_row('array');
		return $q['id'];
	}
	
	//Turn a resoures's ID into an array of its attributes.
	function resource_id_to_resources($id){
		$this->db->select('id, hosted, url, type');
		$this->db->where('parent_id',$id);
		$q = $this->db->get('resourceitems');
		return $q->result_array();
	}
	
}
